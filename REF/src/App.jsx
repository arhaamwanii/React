import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {

  const inputRef = useRef(null);



  const onClick = () => {
     console.log(inputRef.current.value)
     //when i click on the button the cursor should automatically be foucsed on the input for me to start writting
    inputRef.current.focus()
    
    inputRef.current.value = "";
    //when the input has been recieved
  }



  return (
    <>
    <div>
      <h1>arham amin wani</h1>
       <input type="text" placeholder='Ex...' ref={inputRef}   />
       <button onClick={onClick}>Chnage name </button>
    </div>
    </>
  )
}

export default App
  


//we create a refn with the variable name input ref it has the inital value of nothing
  //we ref it to cantain the valuue form the input
  //then we create a function which renders its value basically it gave us acess to the DOM