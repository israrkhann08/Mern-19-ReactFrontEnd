import { useState } from "react";

const Counter = ({itemName: name}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
    <h2><u>{name}</u></h2>
      <h3>
        Counter: <u>{count}</u>
      </h3>
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
      <hr />
    </>
  );
};

export default Counter;
