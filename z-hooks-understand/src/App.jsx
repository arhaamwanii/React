import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15;

  const addValue = () =>{
    console.log("clicked" , counter)
    counter = counter + 1;
    
  }

  //so basically, the value of the counter is updating live but it is not being rendered real time this is where we need hooks to do this real time

  return (
    <>
      <h1>React Hook</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button>Remove value</button>
    </>
  )
}

export default App
