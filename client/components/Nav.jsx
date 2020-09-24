import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <h1>Nav Bar</h1>
      <p>
        <Link to="/register">
    Register
        </Link>
      </p>
      <Link to="/signin">
    Signin
      </Link>

    </>
  )
}

export default Nav
