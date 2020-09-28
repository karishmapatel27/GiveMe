import React, { useEffect, useContext } from 'react'
import { isAuthenticated } from 'authenticare/client'
import { UserContext, updateUserContext } from './UserContext'
import { Link } from 'react-router-dom'

import Nav from './Nav'
//import GalleryImage from './GalleryImage'
import BrowseListing from './BrowseListings'
import Footer from './Footer'

function Home() {
  const [setUser] = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated()) {
      updateUserContext(setUser)
    }
  }, [])

  return (
    <div className='container-footer'>
      <Nav />

      <div className='columns'>
        <Link to="/ItemDetails">Item Details</Link>
      </div>
      <BrowseListing />
      <Footer />
    </div>
  )
}
export default Home
