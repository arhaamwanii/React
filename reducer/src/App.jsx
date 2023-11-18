import { useState } from 'react'
import './App.css'

function App() {
  const [count , setCount] = useState(1);
  const [showText , SetShowText] = useState(false);

  return (
    <> 
    <h1>{count }</h1>

    <button
    onClick={
      () => {
        setCount(count * 9);
        SetShowText(!showText);
      }

    }
    >
      click here
    </button>

    {showText || <p>Checking</p> }


    </>
  )
}

export default App
