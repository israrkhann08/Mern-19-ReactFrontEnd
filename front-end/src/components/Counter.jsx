import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
    <h3><u>{props.itemName}</u></h3>
      <h2>
        Counter: <u>{count}</u>
      </h2>
      <button onClick={increment} style={{ marginRight: "12px" }}>
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
