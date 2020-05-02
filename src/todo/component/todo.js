import React, { createContext, useReducer, useContext } from "react";

import TodoContext from "./context";

export default function Todo(props) {
  const { state, dispatch } = useContext(TodoContext);

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
                onClick={(event) => dispatch({ type: "TOGGLE", payload: todo })}
              />{" "}
              <button
                type="button"
                onClick={(event) => dispatch("REMOVE")}
                style={{
                  color: "green",
                  backgroundColor: "pink",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Remove
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
