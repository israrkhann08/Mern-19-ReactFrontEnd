import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [items, setItems] = useState(["Jeans", "Jackets"]);
  const [userInput, setUserTnput] = useState("");

  const inputChangeHandler = (e) => {
    setUserTnput(e.target.value);
      //  console.log(e.target.value);
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
    style={{'padding': '7px'}}
     />

    <button 
    onClick={addItemInputHandler}>
      Add Item
    </button>

      {items.map((item, index, arr) => {
        return <Counter itemName={item} />;
      })}
      
    </>
  );
}

export default App;
