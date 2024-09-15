import React from "react";
import { useState } from "react";
import Counter from "../components/Counter";
import { useNavigate } from "react-router-dom"; // navigate hook use

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

  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/user-auth/login");
        }}
        className="mb-3 border-b-4 border-cyan-800 p-3"
      >
        Go To Login
      </button>

      <br />
      <input
        value={userInput}
        onChange={inputChangeHandler}
        placeholder="Enter iTeam Name"
        style={{ padding: "7px" }}
      />

      <button onClick={addItemInputHandler}>Add Item</button>

      {items.map((item, index, arr) => {
        return (
          <Counter
            xyz={() => {
              const updateItems = [
                ...items.slice(0, index),
                ...items.slice(1 + index),
              ];

              setItems(updateItems);
            }}
            key={index}
            itemName={item}
          />
        );
      })}
    </>
  );
};

export default Home;
