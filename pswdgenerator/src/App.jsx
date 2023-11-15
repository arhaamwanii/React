import { useState, useCallback } from 'react'
import './App.css'

function App() {
 
  const [length , setLength] = useState(8);
  // determines the change of the number when the limit bar is moved

  const[numberAllow, setNUmberAllow] = useState(false);
  //this determines that would there be a number in the random password

  const[charecterAllow, setCharecterAllow] = useState(false);
  //this determines that would there be a number in the random password

  const[pswd , setPswd] = useState("");
  //liv 

  const passwordGenertor = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrst"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charecterAllow) {
      str += "!@#$%^&*"
    }

    for (let i = 1; i <= i <= array.length; i++){
        let char = Math.floor ( Math.random() * str.length + 1)
        pass = str.charAt(char)
    }

    setPswd(pass)

  } , [length , charecterAllow , numberAllow, setPswd])
  //when we call this we are going to generate a random password




  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor: "black" }}>
    <h1 className='text-4xl text-center text-white pt-4' >Password Generator</h1>

    {/* to track the number - show it live changing on the screen will take USESTATE  */}



    </div>
    </>
  )
}

export default App
