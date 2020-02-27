import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <Link to="/css">Css</Link>
          </li>
          <li>
            <Link to="/js">Javascript</Link>
          </li>
          <li>
            <Link to="/react"> React </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
