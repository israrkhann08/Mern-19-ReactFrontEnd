import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>
        <u>{props.itemName}</u>
      </h2>
      <h3>
        Counter: <u>{count}</u>
      </h3>
      <button onClick={increment} style={{ marginRight: "12px" }}>
        Increment
      </button>

      <button onClick={() => { setCount(count - 1);
        }}
      >
        Decrement
      </button>
      
      <hr />
    </>
  );
};

export default Counter;
