import React from "react";
import CounterComponent, { CounterClass } from "./components/CounterClass";
import CounterFuncComponent from "./components/CounterFuncComponent";
import CounterFunctionComponent from "./components/CounterFuncComponent";

function App() {
  return (
    <div>
      <CounterComponent></CounterComponent>
      <h1>Counter function</h1>
      <CounterFunctionComponent />
    </div>
  );
}

export default App;
