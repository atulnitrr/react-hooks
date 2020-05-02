import React, { useContext, createContext } from "react";
import CounterComponent, { CounterClass } from "./components/CounterClass";
import CounterFuncComponent from "./components/CounterFuncComponent";

import Login from "./components/login/login";
import Register from "./components/register/register";
import DataFetch from "./components/data/DataFetch";
import Todo, { UserContext } from "./todo/component/todo";
import { Dummy } from "./todo/component/dummy";

function App() {
  return (
    <UserContext.Provider value="some dummy value">
      <div>
        <div>
          <h2>TODO app </h2>
          <Todo />
          <Dummy />
          {/* <Todo username={userName} /> */}
        </div>
        {/* Todo div ends here */}

        {/* <div>
        <h2>Data fetch demo</h2>
        <DataFetch />
        <h2>Reegister component</h2>
        <Register />

        <h2>Login component</h2>
        <Login />
        <CounterComponent></CounterComponent>

        <h3>Function compponent</h3>
        <h4>---------------------</h4>
        <CounterFuncComponent />
      </div> */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
