import { useState } from 'react'
import './App.css'

function App() {  
  

  const [count , setCount] = useState(1)
  const [check , setCheck] = useState(true)
  const [times , setTimes] = useState(0)
  

  return (
    <>
  <h1>{count}</h1>

  <button onClick={() => {
    setCheck(!check)
    console.log(check)
    
    setCount(count * 3)

    setTimes(times + 1)

    }}>

    CALL
  
  </button>
    <p>Number of times you did it : {times}</p>



{check && <p> how are you</p> }


    </>
  )
}

export default App
