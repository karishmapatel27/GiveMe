import React, { useEffect, useContext } from 'react'
import { isAuthenticated } from 'authenticare/client'

import { UserContext, updateUserContext } from './UserContext'

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
          <label className="label ">Search</label>
          <input
            className="input "
            id="searchbar"
            name="searchbar"
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
    </>
  )
}

export default Home
