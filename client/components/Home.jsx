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
    <div className="gradient-background">
      <Nav/>
      <div>
        <CategoriesMenu/>
      </div>
    </div>
  )
}

export default Home
