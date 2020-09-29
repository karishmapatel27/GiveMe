import React, { useEffect, useContext } from 'react'
import { isAuthenticated } from 'authenticare/client'
import { UserContext, updateUserContext } from './UserContext'
import { Link } from 'react-router-dom'

import Nav from './Nav'
// import CategoriesMenu from './CategoriesMenu'
// import GalleryImage from './GalleryImage'
import BrowseListings from './BrowseListings'
import Footer from './Footer'
function Home() {
  const [, setUser] = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated()) {
      updateUserContext(setUser)
    }
  }, [])

  return (
<<<<<<< Updated upstream
    <div className='container-footer'>
      <Nav />
      <BrowseListings />
=======
    <>
      <div>
        <Nav/>
        <div className='columns'>
          <Link className="" to="/ListAnItem">Add Item</Link>
          <Link to="/ItemDetails">Item Details</Link>
        </div>
        <GalleryImage/>
      </div>
>>>>>>> Stashed changes
      <Footer />
    </div>
  )
}

export default Home
