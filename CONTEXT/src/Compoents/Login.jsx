import React from 'react'

function Login({setUsername}) {
  return (
    <div> 
        <input type="text" onChange={
            (event) => {
                setUsername(event.target.value)
            }
        } />
  {/* what we have here is that we have a function which takes a parameter for which we taake the argument from other file and we use this text from other file to uptae text on our screen */}

    </div>
  )
}

//event.target.value access the value of  the input field 

//then we set the user name equal to it wehever we change something

export default Login;