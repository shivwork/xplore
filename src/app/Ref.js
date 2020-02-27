import React from "react";
class RefClass extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    console.log("this.props : ->", this.props);
  }

  render() {
    return (
      <div>
        I am Ref Component
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
export default RefClass;
