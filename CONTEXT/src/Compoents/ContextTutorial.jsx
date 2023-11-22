import React from 'react'
import User from './User';
import Login from './Login';
import { useState } from 'react';


function ContextTutorial() {

    const [displayname , setDisplayname] = useState("");

  
  return (
    <div>
      <Login setUsername={setDisplayname}/>
      <User username={displayname}/>
      {/* we set the username dispkay user name to the name we have here */}
    </div>
  )
}

export default ContextTutorial







































//comment
//play  volume
//how are

//this is 

//3 days no codinhg
//4days no coding 
//5days no coding
//6days without coding
//7days coding
//8 days without coding9days without coding
//9days coding
//life withiout coding
//continue after not coding for two days]


//life
//text