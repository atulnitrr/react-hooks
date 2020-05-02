import React, { createContext } from "react";

const TodoContext = createContext({
  todos: [
    { id: 1, text: "do homework", complete: false },
    { id: 2, text: "play match", complete: false },
    { id: 3, text: "finish project", complete: true },
  ],
  dd: "ddd",
});

export default TodoContext;
