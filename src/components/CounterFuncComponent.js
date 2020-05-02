import React, { useState, useEffect } from "react";

const CounterFunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [positiom, setPosition] = useState({ x: null, y: null });
  const [onlineStaus, setOnlineStatus] = useState(navigator.onLine);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const toggle = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times`;

    window.addEventListener("mouseover", handleMouseOver);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [count]);
  // [] arrays says it will run on mount and unmount

  const handleOnline = (event) => {
    setOnlineStatus(true);
  };

  const handleOffline = (event) => {
    setOnlineStatus(false);
  };
  const handleMouseOver = (event) => {
    setPosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

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

      <div>
        <h2>Mosue postion</h2>
        <h4>hjhj</h4>
        <h3>{JSON.stringify(positiom)}</h3>
      </div>

      <div>
        <h2>Network status</h2>
        <h3>
          Youe are <strong>{onlineStaus ? "Online" : "Offline"}</strong>{" "}
        </h3>
      </div>
    </div>
  );
};

export default CounterFunctionComponent;
