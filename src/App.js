// libs
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import "./App.css";
import Header from "../src/app/Structure/Header/Header";
import { Home } from "../src/app/Structure/Home/Home";
import CssComponent from "../src/app/Css/Css";
import JavascriptComp from "../src/app/Javascript/Javascript";
import ReactComp from "../src/app/React";

class app extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/css" component={CssComponent} />
          <Route path="/js" component={JavascriptComp} />
          <Route path="/react" component={ReactComp} />
        </div>
      </Router>
    );
  }
}

export default app;
