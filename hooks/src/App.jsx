// import { useState } from 'react'
// import './App.css'

// function App() {

//   const[counter , setCounter ] = useState(0);

//   //we define a  state variable i.e a variable that is going to change its state 
//    //also a fuction is defined which is used to alter the state of this vatiable -- in order for react to be notified of this happeneing


//   //comman standard is using set before the name of the function and  after it naming it the state variable name

//   function SetCounter(){
//     setCounter(counter + 7)

//   }
//   return (
//     <>
//     <button onClick={SetCounter}>Add 7</button>
//     <h1>{counter}</h1>
//     </>
//   )
// }

// export default App

// //comment preserve




// import React, { useState } from 'react'

// export default function Multiply() {
// const[number , setNUmber] = useState(1);

// setNUmber(
//   number  = number + 3
// )

//   return (
//     <>
//       <button onClick={setNUmber} >Add </button>
//       {number}
//       </>
//   )
// }





//SIMPLE REACT LIVE UPDATE USING -- USESTATE



import React from "react";
import { useState } from "react";


const StateTutorial = () => {
  const [inputValue, setInputValue ] = useState('arham ')

  let onChange = (event) => {
    const newValue = event.target.value;

    // this is how you acess the value inside the Onchange  -- the value that onchange chnged will be accessable here


    setInputValue(newValue)
    //we chnage the state using the actuall method/ funcion defined prior --- otherwise react wont know we chnaged anything and it wont show anything

  };

  return (
    <>
    <input type="text" placeholder="Type Something" onChange={onChange} />

    {/* this onchage attribute detects the change and passes it onto a variable/ which is then used as  a parameter to a function */}

    <br /> <br /> <br />
    {inputValue}
    </>
  )
}

export default StateTutorial