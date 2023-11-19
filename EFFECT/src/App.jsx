import { useEffect } from 'react'
import './App.css'
import axios from "axios";
import { useState } from 'react';

function App() {

  const [arham , setArham ] = useState("");
  const [count , setCount] = useState(0);

 
  useEffect( () => {
   axios.get("https://jsonplaceholder.typicode.com/comments").then((whatever) =>{
    setArham(whatever.data[0].email)
    console.log("number of times")
   })
  }, [count])


//allows you to pass all the states that we want to listen to, but in this case we pass an emply array which means it wont listen to anything - thus wont change its value 
//If you pass an empty array ([]) as the second argument to the useEffect hook, it means that the effect will only run once when the component mounts, and it won't run again for subsequent renders

  //the message is logged more than once, i.e however many times the page is re-rendered the this command will be called again thus making it log every time it re-remders 
  //whatever we put in the function is what will be called when we load the page initially - wheneever the page renders?!
//this here will be called wheneve a state is canged so yead
  
return (
    <>
    <h1>Hello, {arham}</h1>
    <h1>{count}</h1>
    <button
    onClick={
      () => {
        setCount(count + 1)
      }
    }
    >
      Add
    </button>
    </> 
  )
}

export default App
