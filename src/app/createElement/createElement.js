import React from "react";

const Wrapper = () => {
  return React.createFactory("button", { name: "shiv" }, "click me");
};
export default Wrapper;
