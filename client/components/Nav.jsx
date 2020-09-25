import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Nav (props) {
  let currentPage = props.location.pathname
  let navLinks = null

  switch (currentPage) {
    case '/':
      navLinks = (
        <>
          <Link to="/SignIn">Sign in</Link>
          <Link to="/Register">Register</Link>
        </>
      )
      break
    case '/SignIn':
      navLinks = (
        <>
          <Link to="/Register">Register</Link>
          <Link to="/">Home</Link>
        </>
      )
      break
    case '/Register':
      navLinks = (
        <>
          <Link to="/SignIn">Sign in</Link>
          <Link to="/">Home</Link>
        </>
      )
      break
    default:
      navLinks = (
        <>
          <Link to="/Signin">Sign in</Link>
          <Link to="/register">Register</Link>
        </>
      )
  }
  return (
    <>
      <div className="nav">
        <IfAuthenticated>
          <Link to="/" onClick={logOff}>
            Log out
          </Link>
          <Link to="/">Home</Link>
        </IfAuthenticated>
        <IfNotAuthenticated>{navLinks}</IfNotAuthenticated>
      </div>
    </>
  )
}
