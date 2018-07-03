const API_URL = process.env.REACT_APP_BACKEND_URL;

function getConfig(uri, method, body, authRequired) {
  let config = {
    url: uri.startsWith("http") ? uri : API_URL + uri,
    api: {
      method: method,
      headers: {
        "Content-Type": "application/json"
      }
    }
  };
  if (body) {
    config.api.body = JSON.stringify(body);
  }

  if (authRequired) {
    const jwtToken = localStorage.getItem("cl_auth");
    if (jwtToken) {
      config.api.headers.Authorization = "JWT " + jwtToken
    } else {
      throw new Error("Accessing protected route without authentication.")
    }
  }
  return config
}


async function callApi(config) {
  const response = await fetch(config.url, config.api);
  if (response.ok) {
    if (response.status === 204) {
      return null
    } else {
      return response.json()
    }
  } else {
    throw response
  }
}


export const CALL_API = Symbol("Call API");

export default store => next => async action => {
  if (!action) {
    return
  }
  const callAPI = action[CALL_API];

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === "undefined") {
    return next(action)
  }

  let {
    uri,
    method,
    body,
    authRequired = true,
    types = [],
    callbacks = {},
    extraData = {}
  } = callAPI;
  const [requestType = "UNNAMED_REQUEST", successType = "UNNAMED_SUCCESS", errorType = "UNNAMED_FAILURE"] = types;
  const { onRequest, onSuccess, onFailure } = callbacks;
  const { requestData, successData, failureData } = extraData;

  const config = getConfig(uri, method, body, authRequired);
  next({
    data: requestData ? { data: body, extra: requestData } : body,
    type: requestType
  });
  if (onRequest) onRequest();

  let payload, ret;
  try {
    payload = await callApi(config);
  } catch (response) {
    ret = next({
      data: failureData ? { data: response, extra: failureData } : response,
      type: errorType
    });

    if (onFailure) onFailure(response);

    return ret
  }

  ret = next({
    data: successData ? { data: payload, extra: successData } : payload,
    type: successType
  });

  if (onSuccess) onSuccess(payload);

  return ret

}
