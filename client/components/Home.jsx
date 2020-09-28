import React, { useEffect, useContext } from 'react'
import { isAuthenticated } from 'authenticare/client'
import { UserContext, updateUserContext } from './UserContext'
import { Link } from 'react-router-dom'

import Nav from './Nav'
import GalleryImage from './GalleryImage'
import Footer from './Footer'

function Home () {
  const [setUser] = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated()) {
      updateUserContext(setUser)
    }
  }, [])

  return (
    <>
      <Nav/>

      <div className='columns'>
        <Link to="/ItemDetails">Item Details</Link>
      </div>
      <GalleryImage/>
      <Footer />
    </>
  )
}
export default Home
