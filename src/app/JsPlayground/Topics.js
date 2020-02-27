import React from "react";
class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: [
        { name: "shiv", place: "delhi" },
        { name: "roy", place: "patna" },
        { name: "amar", place: "gurgaon" },
        { name: "ajay", place: "usa" }
      ]
    };

    // setTimeout(() => {
    //   console.log("setTimeout : ->");
    //   this.setState((prevState, prevProps) => {
    //     return { count: prevState.count + 1 };
    //   });
    // }, 3000);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h5>JS Playground</h5>
      </div>
    );
  }
}
export default Topic;
