import React, { useState, useEffect } from "react";

const CounterFunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [positiom, setPosition] = useState({ x: null, y: null });
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const toggle = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  });

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={increment}>Clicked {count} times</button>

      <h2>Toggle light</h2>
      <div
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: isOn ? "green" : " red",
        }}
        onClick={toggle}
      ></div>
    </div>
  );
};

export default CounterFunctionComponent;
