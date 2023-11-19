import { useEffect } from 'react'
import './App.css'
import axios from "axios";

function App() {

  useEffect( () => {
    console.log("intial render on page load")
  })

  return (
    <>
    <h1>Hello World</h1>
    </> 
  )
}

export default App
