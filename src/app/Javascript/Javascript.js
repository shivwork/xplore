import React from "react";
import { fromJS } from "immutable";
import Sidebar from "../Structure/Sidebar/Sidebar";
import Body from "../Structure/Body/Body";
class JavascriptComp extends React.PureComponent {
  componentDidMount() {
    console.log("sdfdsf");
    let a = fromJS({ name: "shiv", place: "bihar" });
    console.log("a", a);
    let b = fromJS("sdfdsfsdf");
    console.log("b", b, typeof b);
  }

  render() {
    return (
      <div>
        <button>Click</button>
        <Sidebar>Immutable</Sidebar>
      </div>
    );
  }
}
export default JavascriptComp;
