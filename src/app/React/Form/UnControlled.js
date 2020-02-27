import React from "react";

class UnControlled extends React.PureComponent {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
  }

  handleSubmit = () => {
    console.log("this._name : ->", this.name.value);
    console.log("this.email : ->", this.email.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={name => (this.name = name)} />
        <input type="text" ref={email => (this.email = email)} />
        <button type="button" onClick={() => this.handleSubmit()}>
          submit
        </button>
      </div>
    );
  }
}
export default UnControlled;
