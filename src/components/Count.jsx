import React from "react";
import useCount from "../hooks/useCount";

const Count = () => {
  const { count, increase, decrease, reset } = useCount();
  return (
    <>
      <h1>{count}</h1>
      <br />
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default Count;
