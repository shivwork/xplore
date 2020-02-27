import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import hocComp from "../React/hoc/Hoc";
import FunHoc from "../React/hoc/FunComponent";
import StyledComp from "../React/StyledComp/StyledComp";
import Controlled from "../React/Form/Controlled";
import UnControlled from "../React/Form/UnControlled";

class ReactComponent extends React.PureComponent {
  render() {
    return (
      <div>
        I am react
        <StyledComp />
        {/* Controlled Component: */}
        {/* <Controlled /> */}
        UnControlled Component:
        <UnControlled />
      </div>
    );
  }
}
export default ReactComponent;
