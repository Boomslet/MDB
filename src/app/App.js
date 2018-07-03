import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import HomePage from '../home/page';
import NavBar from './components/NavBar'
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
