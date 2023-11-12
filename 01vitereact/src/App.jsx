import Chai from "./chai"
import React from 'react'

const AnotherUser = "another variable in Global context - which we put in the a custom react element - which we then put in a  " 

const createReactElement = React.createElement(
  "a",
  {href: 'youtube.com' , target: "_blank"},
  AnotherUser
)

function App() {
  const username = "text-inside user name - function Context"

  return (
  //   <>
  //   <Chai/> 
  //   <h1>h1 which is in app.jsx {username}</h1>
  //   <h1> arham amin {AnotherUser} </h1>
  // </> 
  createReactElement
  )
}
export default App

//it is comp eletely same as norml react project but it dosent have script to run the htnl it just directly integrated this shit