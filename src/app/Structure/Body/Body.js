import React from "react";
class Body extends React.PureComponent {
  render() {
    const { children } = this.props;

    return <div className="body-demo">{children}</div>;
  }
}
export default Body;
