import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'
import { UserContext, updateUserContext } from './UserContext'

import Nav from './Nav'
import CategoriesMenu from './CategoriesMenu'

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
              <Nav/>
        <CategoriesMenu/>
        <div className='columns'>
          <label className="label ">Search</label>
          <input
            className="input "
            id="searchbar"
            name="searchbar"
            placeholder="Search"
            type="text"
          />
          <Link className="" to="/ListAnItem">Add Item</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
