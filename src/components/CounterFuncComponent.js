import React, { useState } from "react";

const CounterFunctionComponent = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={increment}>Clicked {count} times</button>
    </div>
  );
};

export default CounterFunctionComponent;
