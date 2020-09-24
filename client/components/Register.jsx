import React, { useState, useContext } from 'react'
import { register, isAuthenticated } from 'authenticare/client'

//import { UserContext, updateUserContext } from './UserContext'

function Register(props) {
//  const [, setUser] = useContext(UserContext)
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [id, setGardenId] = useState('')
 //const [email, email] = useState('')
 const baseUrl = '/api/v1'

 const handleClick = () => {
  register(
   {
    username: username,
    password: password,
    id: Number(id),
    //email: email
   },
   { baseUrl }
  )
   .then(() => {
    if (isAuthenticated()) {
     updateUserContext(setUser)
     return props.history.push('/giveMe')
    }
    return null
   })
   .catch((error) => {
    console.log('error: ', error.message)
   })
 }

 return (
  <div className="registerContainer container">
   <div className="leftRegister">
    <div className="registerTitle">
     <h1>Register</h1>
    </div>
    <label className="label">Username</label>
    <input
     className="input"
     type="username"
     value={username}
     placeholder="username"
     onChange={(e) => setUsername(e.target.value)}
    ></input>
    <label className="label">Password</label>
    <input
     className="input"
     type="password"
     value={password}
     placeholder="password"
     onChange={(e) => setPassword(e.target.value)}
    ></input>
    <button
     type="button"
     className="button is-primary"
     onClick={handleClick}
     data-testid="submitButton"
    >
     Register
        </button>
   </div>
  </div>
 )
}

export default Register