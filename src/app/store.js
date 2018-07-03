import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import api from "./api";

import rootReducer from "./reducers";

let store;
let middleware = applyMiddleware(
  thunk,
  api
);

if (process.env.NODE_ENV === "development") {
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middleware = enhancer(middleware);
}

store = createStore(rootReducer, middleware);

export default store;
