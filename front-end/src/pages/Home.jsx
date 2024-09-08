import React from "react";
import { useState } from "react";
import Counter from "../components/Counter";

const Home = () => {
  const [items, setItems] = useState(["Jeans", "Jackets"]);
  const [userInput, setUserTnput] = useState("");

  const inputChangeHandler = (e) => {
    setUserTnput(e.target.value);
  };

  const addItemInputHandler = () => {
    setItems([...items, userInput]);
    setUserTnput("");
  };

  return (
    <>
      <input
        value={userInput}
        onChange={inputChangeHandler}
        placeholder="Enter iTeam Name"
        style={{ padding: "7px" }}
      />

      <button onClick={addItemInputHandler}>Add Item</button>

      {items.map((item, index, arr) => {
        return <Counter
        key={index}
         itemName={item}
         xyz={(n) => {
            console.log("xyz called for" , n);   
         }} />;
      })}
    </>
  );
};

export default Home;
