import React, { useState, useContext } from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import { Link } from 'react-router-dom'

import { UserContext, updateUserContext } from './UserContext'

function Register (props) {
  const [, setUser] = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setUserEmail] = useState('')
  const baseUrl = '/api/v1'

  const handleClick = () => {
    register(
      {
        username: username,
        password: password,
        email: email
      },
      { baseUrl }
    )
      .then(() => {
        if (isAuthenticated()) {
          updateUserContext(setUser)
          return props.history.push('/Home')
        }
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }

  return (
    // <div className="gradient-background">
    <div className="wrapper">
      <div className="form" >
        <div className='formLeft'>
          <img className="is-rounded1" src='./img/logo-txt-orange.png' />
        </div>
        <div className="formRight">

          <h1>Register</h1>

          <input className="input1" placeholder="Email" type="email" onChange={(e) => setUserEmail(e.target.value)}></input>

          <input className="input1" placeholder="Username" type="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>

          <input className="input1" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

          <button type="button" className="button primaryBtn" onClick={handleClick} data-testid="submitButton">Register</button>

          <Link className="" onClick={handleClick} to="/signin">Sign In</Link>

        </div>
      </div>
    </div>
    // </div>
  )
}

export default Register
