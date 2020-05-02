import React, { useContext, useReducer } from "react";

// import { UserContext } from "./todo";
const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    case "reset":
    default:
      return initialState;
  }
};

export const Dummy = () => {
  // var data = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Dummy </h1>

      <strong>Count {state.count} </strong>
      <button
        className="border m-2 p-2"
        onClick={(event) =>
          dispatch({
            type: "increment",
          })
        }
      >
        Increment
      </button>
      <button
        className="border m-2 p-2 
      "
        onClick={(event) => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        className="border m-2 p-2"
        onClick={(event) => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};
