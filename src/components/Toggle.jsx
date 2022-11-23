import React from "react";
import useToggle from "../hooks/useToggle";

const Toggle = () => {
  const [isVisible, toggle] = useToggle();
  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>Hidden text</p>}
    </div>
  );
};

export default Toggle;
