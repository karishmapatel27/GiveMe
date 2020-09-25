import React, { useState, useContext } from 'react'
import { register, isAuthenticated } from 'authenticare/client'

// import { UserContext, updateUserContext } from './UserContext'

function Register (props) {
//  const [, setUser] = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [id, setUserId] = useState('')
  const [email, setUserEmail] = useState('')
  const baseUrl = '/api/v1'

  const handleClick = () => {
    register(
      {
        username: username,
        password: password,
        // email: email,
        id: Number(id)
        // email: email
      },
      { baseUrl }
    )
      .then(() => {
        if (isAuthenticated()) {
          // updateUserContext(setUser)
          return props.history.push('/giveMe')
        }
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }

  return (
    <div className="registerForm" >
      <div>
        <img className="is-rounded" src='./img/logo-alt.png' />
      </div>
      <div className="leftRegister">
        <div className="registerTitle">
          <h1>Register</h1>
        </div>
        <label className="label">email</label>
        <input className="input" type="email" placeholder="email" onChange={(e) => setUserEmail(e.target.value)}></input>

        <label className="label">Username</label>
        <input className="input" type="username" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>

        <label className="label">Password</label>
        <input className="input" type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>

        <button type="button" className="button is-primary" onClick={handleClick} data-testid="submitButton">Register</button>
      </div>
    </div>
  )
}

export default Register
