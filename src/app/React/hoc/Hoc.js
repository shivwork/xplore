import React from "react";

const capitalName = WrappedComponent => {
  return class extends React.Component {
    render() {
      const { name } = this.props;
      console.log("this.props : ->", this.props);
      console.log("this : ->", this);
      console.log("WrappedComponent : ->", WrappedComponent);
      const newName = name.toUpperCase();
      return <WrappedComponent name={newName} />;
    }
  };
};
export default capitalName;
