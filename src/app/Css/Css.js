import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "../Structure/Sidebar/Sidebar";
import Body from "../Structure/Body/Body";
import "./style.css";

class CssComponent extends React.PureComponent {
  shadowComp = () => {
    return (
      <div>
        <p className="text-shadow">I am text shadow</p>
        <div className="box-shadow col-md-offset-6">
          <div className="box-header">3</div>
          <div className="box-footer">3 May, 2019</div>
        </div>
        <br />
        <div className="inner-box">
          <div className="box-item" />
        </div>
      </div>
    );
  };

  cssHandbook = () => (
    <div className="inheritance" id="inherit-div">
      <div>I am inheritance child </div>
      <p className="inherit-revert">Not inherit background color</p>
      Not clear
      <div className="specficity">
        <p className="class-p">I am class</p>
        <input className="spec-input" type="text" disabled />
        <p style={{ backgroundColor: "blue" }}>I am inline</p>
        <ul className="spec-ul">
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
        <p>I am last child p tag</p>
      </div>
      <div className="psuedo-element">
        <p>I am first pseudo element p tag</p>
        <p className="pseudo-middle">I am middle pseudo element p tag</p>
        <p>I am last pseudo element p tag</p>
      </div>
      <div className="css-calc">
        <p className="title">Calc Learning</p>
        <span>Normal font sie spna</span>
        <span className="calc-one">Calc font span</span>
        <div className="calc-two">Wide banner</div>
        <br />
        <div className="calc-form">
          <label htmlFor="">Name</label>
          <input type="text" className="calc-input" />
        </div>
      </div>
      <div className="css-display-container">
        <p className="title">Display</p>
        <div className="css-display-item css-block">Block div</div>
        <br />
        <span className="css-display-item css-inline">Inline span</span>
      </div>
    </div>
  );

  render() {
    return (
      <div className="container">
        <ul className="sidebar">
          <li>
            <Link to="/css/box-shadow">Shadow</Link>
          </li>
          <li>
            <Link to="/css/classname">Class Name</Link>
          </li>
          <li>
            <Link to="/css/handbook">Handbook</Link>
          </li>
        </ul>
        <div className="body">
          <Switch>
            <Route
              exact
              path="/css"
              component={() => <div>Css dashboard</div>}
            />
            <Route path="/css/box-shadow" component={this.shadowComp} />
            <Route
              path="/css/classname"
              component={() => <div>Class name</div>}
            />
            <Route path="/css/handbook" component={this.cssHandbook} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default CssComponent;
