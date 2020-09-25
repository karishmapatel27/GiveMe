import React, { useEffect, useContext } from 'react'
import { Link, Route } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'

import { UserContext, updateUserContext } from './UserContext'
import SignIn from './SignIn'

function Home () {
  const [, setUser] = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated()) {
      updateUserContext(setUser)
    }
  }, [])

  return (
    <>
      <div className='container'>
        <h1>Home</h1>
        <div className='columns'>
          <div className='landingBtns'>
            <Link className="button browseBtn" to={'/SignIn'}>Sign In</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
