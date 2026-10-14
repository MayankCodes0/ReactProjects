import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  let [var1, setVar1] = useState("");

  const addValue = () => {
    if(counter >= 20) {
      setVar1("counter can't go above 20");
      return;
    }
    setCounter(counter + 1);
    setVar1("");
    console.log("add btn clicked\ncounter value is ", counter); //this line will print unupdated counter(reason is in handwritten notes[Page No. III])
  }
  const substractValue = () => {
    if(counter <= 0) {
      setVar1("counter can't go below 0");
      return;
    }
    setCounter(counter - 1);
    setVar1("");
    console.log("substract btn clicked\ncounter value is ", counter); //this line will print unupdated counter(reason is in handwritten notes[Page No. III])
  }

  return (
    <>
      <h1>Counter React App</h1>
      <p>Count is {counter}</p>
      <br />
      <button
        onClick={addValue}>Add</button>
      <br />
      <button
        onClick={substractValue}>Substract</button>
      <br />
      <p>{var1}</p>
    </>
  )
}

export default App
