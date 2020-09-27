import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'
import { UserContext, updateUserContext } from './UserContext'

import Nav from './Nav'
import CategoriesMenu from './CategoriesMenu'
import GalleryImage from './GalleryImage'
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
      <div>
        <p>
          <GalleryImage/>
        </p>
      </div>
    </div>
  )
}

export default Home
