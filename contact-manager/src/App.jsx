import { useState } from 'react'
import './App.css'
import Header from "./Components/Header"
import AddContact from "./Components/AddContact"
import ContactList from "./Components/ContactList"
// import ContactCard from "./Components/ContactCard"



function App() {

const contacts  = [
  {
    id: "1",
    name: "Arham",
    email: "arhaaamw@gmail.com"
  },
  {
    id: "2",
    name: "Dayyan",
    email: "dayyanwani@gamil.com",
  }
]

  return (
    < >
    <div className='ui container'>
        <Header/>
        <AddContact/>
        <ContactList contacts={contacts}/> 
    </div>
    </>
  )
}

export default App


//indivdual piece of code 
