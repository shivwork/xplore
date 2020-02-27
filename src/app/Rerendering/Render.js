import React from "react";
import Topic from "../JsPlayground/Topics";
class Rerender extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log("componentDidMount Child: ->", this.props.count);
  }
  addCounter = () => {
    this.setState((prevState, prevProps) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    console.log("Render child : ->");
    const { count } = this.props;
    return (
      <div>
        Rerendering Test : {count}
        {/* <button onClick={this.addCounter}>Add</button> */}
        {/* <Topic /> */}
      </div>
    );
  }
}
export default Rerender;
