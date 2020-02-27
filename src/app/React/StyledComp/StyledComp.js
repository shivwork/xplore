import React from "react";
import styled, { css } from "styled-components";
import Input from "./Input";

const Button = styled.div`
  padding: 1em;
  color: ${props => props.color || "black"};
  color: ${props => {
    // console.log("props : ->", props);
  }};
`;
const a = Button.componentStyle.rules[1];
const b = a({ color: "red" });

// console.log("b : ->", b);
// console.log("Button : ->", Button);

class StyledComp extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Styled comp
        <Button color="red">Test</Button>
        <Input padding="1em" />
      </div>
    );
  }
}
export default StyledComp;
