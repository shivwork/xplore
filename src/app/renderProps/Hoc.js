import React from "react";
class RenderPropHoc extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("this.props : ->", this.props.render().props);
  }
  render() {
    return (
      <div>
        Hoc Render props
        {this.props.render()}
      </div>
    );
  }
}
export default RenderPropHoc;
