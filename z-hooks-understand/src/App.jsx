import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter ] = useState(15)

  // let counter = 15;

  const addValue = () =>{
    
    // counter = counter + 1;
    setCounter(counter + 2)
    console.log("clicked" , counter);
  }

  const removeValue = () =>{
    setCounter(counter - 3 )
    console.log("clicked" + counter)
  }

  //so basically, the value of the counter is updating live but it is not being rendered real time this is where we need hooks to do this real time - REACTive
  //controls the live updation of the UI|

  //here we didnt even import js but this jsx still got converted this happened due to BABEL 
  return (
    <>
      <h1>React Hook</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value to {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value to {counter}</button>

      <footer>
        <hr />
        <h2>Current value {counter}</h2>
      </footer>
    </>
  )
}

export default App

// comment check
