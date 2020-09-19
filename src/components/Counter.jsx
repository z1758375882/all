import React, { useState } from "react";

function Counter(props) {
  const { step } = props;
  const [count, setCount] = useState(0);
  const clickhandel = () => {
    setCount(count + step);
  };
  return (
    <div>
      <h3>当前步长为{step}</h3>
      <button onClick={clickhandel}>count值为{count}</button>
    </div>
  );
}

export default Counter;
