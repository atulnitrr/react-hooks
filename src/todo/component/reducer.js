import React, { useReducer, useContext } from "react";

import TodoContext from "./context";

export default function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      const newArray = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : t
      );

      return {
        ...state,
        todos: newArray,
      };
    case "REMOVE":
      const filteredArray = state.todos.filter(
        (t) => t.id !== state.payload.id
      );
      return {
        ...state,
        todos: filteredArray,
      };
    default:
      return state;
  }
}
