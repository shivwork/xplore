import React from "react";
import capitalName from "./Hoc";
const UserName = ({ name }) => <div>{name}</div>;
const capitalUserName = capitalName(UserName);
export default capitalUserName;
export { UserName };
