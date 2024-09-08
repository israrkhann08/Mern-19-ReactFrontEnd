import { useState } from 'react'
import './App.css'

function App() {

const[count, setCount] = useState(0);

const increment = () => {
    setCount(count + 1)
}

  return (
    <>
       <h1>Counter: <u>{count}</u></h1>
       <button onClick={increment} style={{'marginRight': "12px"}} >Increment</button>
       <button onClick={() => { setCount(count -1)}}>Decrement</button>
    </>
  )
}

export default App
