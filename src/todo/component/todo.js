import React, { createContext, useReducer, useContext } from "react";

import TodoContext from "./context";

export default function Todo(props) {
  const { state } = useContext(TodoContext);

  return (
    <div>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <span>
              {" "}
              <input
                type="checkbox"
                checked={todo.complete ? true : false}
              />{" "}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
