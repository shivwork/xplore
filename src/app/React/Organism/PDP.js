import React from "react";

class PDP extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees").then(res => {
      console.log("res : ->", res);
    });
  }

  render() {
    return <div>PDP page</div>;
  }
}

export default PDP;
