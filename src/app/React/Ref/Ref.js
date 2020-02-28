import React from "react";

//  createRef Class
class Ref extends React.PureComponent {
  constructor(props) {
    super(props);
    this.headingRef = React.createRef();
    this.secondHeadingRef = React.createRef();
  }

  headingClick = () => {
    console.log("this.headingRef : ->", this.headingRef);
    console.log("this.secondHeadingRef : ->", this.secondHeadingRef);
  };

  render() {
    return (
      <div>
        Learn Ref
        <h6 ref={this.headingRef} onClick={() => this.headingClick()}>
          Heading level 6
        </h6>
        <SecondLevel
          secondHeadingRef={this.secondHeadingRef}
          headingRef={this.headingRef}
        />
        <br />
        ------------Callback Functional ----------
        <FirstCallbackRef />
        <br />
        ------------Callback Class ----------
        <ThirdCallbackRef />
      </div>
    );
  }
}

// createRef function
const SecondLevel = ({ secondHeadingRef, headingRef }) => {
  const secondHeading = React.createRef();

  function secondHeadingClick() {
    console.log("secondHeading : ->", secondHeadingRef);
    console.log("headingRef : ->", headingRef);
  }
  return (
    <div>
      <h5 ref={secondHeadingRef} onClick={() => secondHeadingClick()}>
        SecondLevel Heading
      </h5>
    </div>
  );
};

/********      Callback Refs      ****** */
let inputRef = null;
const FirstCallbackRef = () => {
  function focusInput() {
    console.log("inputRef : ->", inputRef);
    inputRef.focus();
  }
  return (
    <div>
      FirstCallbackRef
      <button onClick={focusInput}>Focus me</button>
      <SecondCallbackRef inputRef={el => (inputRef = el)} />
    </div>
  );
};

const SecondCallbackRef = ({ inputRef }) => (
  <div>
    Second Ref
    <input type="text" placeholder="User" ref={inputRef} />
  </div>
);

class ThirdCallbackRef extends React.PureComponent {
  focusInput = () => {
    console.log("this.inputRef : ->", this.inputRef);
    this.inputRef.focus();
  };
  render() {
    return (
      <div>
        Third Callback Ref Experiment
        <button onClick={() => this.focusInput()}>Focus me</button>
        <SecondCallbackRef inputRef={el => (this.inputRef = el)} />
      </div>
    );
  }
}
export default Ref;
