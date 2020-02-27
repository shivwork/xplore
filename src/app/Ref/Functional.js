import React from "react";

const RefFunction = ({ btnRef, parentInputRef }) => {
  let inputRef = React.createRef();

  const btnHandler = () => {
    // console.log("parentInputRef : ->", parentInputRef.current);
    // parentInputRef.current.focus();
  };

  return (
    <div>
      Ref Functional Component
      <button onClick={() => btnHandler()} ref={btnRef}>
        Child Button
      </button>
      <input type="text" ref={inputRef} />
    </div>
  );
};
export default RefFunction;
