import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor: "black" }}>
    <h1 className='text-4xl text-center text-white '>Password Generator</h1>
    </div>
    </>
  )
}

export default App
