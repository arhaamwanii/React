import { useState } from 'react'
import './App.css'
import Header from "./Components/Header"
import ContactList from "./Components/ContactList"
import ContactCard from "./Components/ContactCard"
import AddContact from "./Components/AddContact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    {/* <AddContact/>
    <ContactList/> */}
    </>
  )
}

export default App


//indivdual piece of code 
