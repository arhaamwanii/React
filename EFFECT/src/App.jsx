import { useEffect } from 'react'
import './App.css'
import axios from "axios";
import { useState } from 'react';

function App() {

  const [arham , setArham ] = useState("");

 
  useEffect( () => {
   axios.get("https://jsonplaceholder.typicode.com/comments").then((whatever) =>{
    setArham(whatever.data[0].email)
    console.log("number of times")
   })
  })

  //the message is logged more than once, i.e however many times the page is re-rendered the this command will be called again thus making it log every time it re-remders 

  //whatever we put in the function is what will be called when we load the page initially - wheneever the page renders?!
//this here will be called wheneve a state is canged so yead
  return (
    <>
    <h1>Hello, {arham}</h1>
    </> 
  )
}

export default App
