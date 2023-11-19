import React from 'react'

function Login({setUsername}) {
  return (
    <div> 
        <input type="text" onChange={
            (event) => {
                setUsername(event.target.value)
            }
        } />
    </div>
  )
}

//event.target.value access the value of  the input field 

//then we set the user name equal to it wehever we change something

export default Login;