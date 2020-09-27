import React, { useState, useContext } from 'react'
import { isAuthenticated, signIn } from 'authenticare/client'
import { Link } from 'react-router-dom'

import { UserContext, updateUserContext } from './UserContext'

function SignIn (props) {
  const [, setUser] = useContext(UserContext)
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const baseUrl = '/api/v1'
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleClick = () => {
    const { username, password } = form
    return signIn({ username, password }, { baseUrl })
      .then(() => {
        if (isAuthenticated()) {
          updateUserContext(setUser)
          return props.history.push('/Home')
        }
        return null
      })
  }

  return (
    <div className="gradient-background">
      <div className="wrapper">
        <div className="form">
          <div className='formLogo'>
            <img className="is-rounded" src='./img/logo-orange.png' />
          </div>
          <div className="formRight">
            <div className="signInTitle">
              <h1>Sign in</h1>
            </div>

            <label className="label ">Username</label>
            <input className="input1" id="username" name="username" value={form.username} onChange={handleChange} type="text"/>
            <label className="label">Password</label>
            <input className="input1" id="password" name="password" value={form.password} onChange={handleChange} type="password"/>
            <button className="button primaryBtn" data-testid="submit-button" onClick={handleClick}>Sign in</button>
            <Link className="" onClick={handleClick} to="/register">Register</Link>

          </div>
        </div>
      </div>
    </div>
  )
}
export default SignIn
