import { useEffect, useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };


//   useEffect(() => {
//     console.log("UseEffect run for count value: ", count);

//     return () => {
//       console.log("Clean up function", count);
//     };
//   }, [count]);

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

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      
      <button style={{ marginLeft: "12px" }} onClick={ ()=> {
        props.xyz()
      }}>Delete</button>
      <hr />
    </>
  );
};

export default Counter;
