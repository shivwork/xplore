import React from "react";
import { Switch, Route, Link } from "react-router-dom";
// Components
import hocComp from "../React/hoc/Hoc";
import FunHoc from "../React/hoc/FunComponent";
import StyledComp from "../React/StyledComp/StyledComp";
import Controlled from "../React/Form/Controlled";
import UnControlled from "../React/Form/UnControlled";
import ContextApi from "../React/ContextApi/ContextApi";
import Ref from "../React/Ref/Ref";
import ClassLifecycle from "../React/LifecycleMethod/Lifecycle";
class ReactComponent extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <ul className="sidebar">
          <li>
            <Link to="/react/contextapi">Context Api</Link>
          </li>
          <li>
            <Link to="/react/ref">Ref</Link>
          </li>
          <li>
            <Link to="/react/lifecycle">Lifecycle</Link>
          </li>
        </ul>
        <div className="body">
          <Switch>
            <Route
              exact
              path="/"
              component={() => <div>React Dashboard</div>}
            />
            <Route path="/react/contextapi" component={ContextApi} />
            <Route path="/react/ref" component={Ref} />
            <Route path="/react/lifecycle" component={ClassLifecycle} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default ReactComponent;
