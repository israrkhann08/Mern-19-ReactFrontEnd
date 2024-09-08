import { useEffect, useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
 
  // four useCase of useEffect -1> without dependency,-2> with dependency -3>[count] pass state, 
  // -4>mix 3 clean up function
  useEffect( () => {
    console.log("UseEffect run for count value: ", count);

    return () => {
        console.log("Clean up function", count);
    }
  },[count])


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
