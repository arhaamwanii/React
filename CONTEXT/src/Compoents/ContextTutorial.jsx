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
    </div>
  )
}

export default ContextTutorial

//comment
//play  volume
//how are

//this is 
//