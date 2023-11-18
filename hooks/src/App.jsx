import { useState } from 'react'
import './App.css'

function App() {

  const[counter , setCounter ] = useState(0);


  //comman standard is using set before the name of the function and  after it naming it the state variable name

  function SetCounter(){
    setCounter(counter + )

  }
  return (
    <>
    <button onClick={SetCounter}>Add 7</button>
    <h1>{counter}</h1>
    </>
  )
}

export default App

//comment preserve