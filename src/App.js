import React from "react";
import CounterComponent, { CounterClass } from "./components/CounterClass";
import CounterFuncComponent from "./components/CounterFuncComponent";

import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
    <div>
      <h2>Reegister component</h2>
      <Register />

      <h2>Login component</h2>
      {/* <Login /> */}
      {/* <CounterComponent></CounterComponent> */}

      <h3>Function compponent</h3>
      <h4>---------------------</h4>
      {/* <CounterFuncComponent /> */}
    </div>
  );
}

export default App;
