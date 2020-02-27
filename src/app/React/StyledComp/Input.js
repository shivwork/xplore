import React from "react";
import style from "./Input.style";
import withStyle from "./withStyle";

class Input extends React.PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={`${className} input-container`}>
        I am Input
        <br />
        <input type="text" />
      </div>
    );
  }
}

export default withStyle(Input, style);
