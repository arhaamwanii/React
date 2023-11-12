import Chai from "./chai"

const AnotherUser = "another variable in Global context" 

const createReactElemetn = {
  "h1",
  
}



function App() {
  const username = "text-inside user name - function Context"

  return (
    <>
    <Chai/> 
    <h1>h1 which is in app.jsx {username}</h1>
    <h1> arham amin{AnotherUser} </h1>
  </> 
  )
}
export default App

//it is comp eletely same as norml react project but it dosent have script to run the htnl it just directly integrated this shit