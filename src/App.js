import React from "react";
import CounterComponent, { CounterClass } from "./components/CounterClass";
import CounterFuncComponent from "./components/CounterFuncComponent";

function App() {
  return (
    <div>
      {/* <CounterComponent></CounterComponent> */}

      <h3>Function compponent</h3>
      <h4>---------------------</h4>
      <CounterFuncComponent />
    </div>
  );
}

export default App;
