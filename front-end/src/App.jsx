import "./App.css";
import Counter from "./components/Counter";

function App() {
  const iteams = ["Jeans", "Jackets", "Shirts"];

  return (
    <>
      {iteams.map((item, index, arr) => {
        return <Counter itemName={item} />;
      })}
    </>
  );
}

export default App;
