import { toHaveFormValues } from "@testing-library/jest-dom/matchers";
import "./App.css";
import React, { useState } from "react";

/* 
1. Hooks can only be used in functional compnents
2. Hooks must alwasy excecute int eh same order
3. Hooks cannot be in loops, if statements, or functions, and must be in       global scope.
4. useState alwasy returns an array with two toHaveFormValues, the stateful variable and a function to update the stateful varibale. 
*/

function App() {
  const [count, setCount] = useState(initialCount);

  function initialCount() {
    return 4
  }

  const handleCountIncrament = (e) => {
    return setCount(count => count + 1);
  };

  const handleCountDecrement = (e) => {
    return setCount(count => count - 1);
  };

  return (
    <>
      <button onClick={handleCountDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleCountIncrament}>+</button>
    </>
  );
}

export default App;
