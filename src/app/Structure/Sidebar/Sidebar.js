import React from "react";
class Sidebar extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="sidebar">
        Sidebar
        {children}
      </div>
    );
  }
}
export default Sidebar;
