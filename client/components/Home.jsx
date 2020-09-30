import React, { useEffect, useContext } from 'react'
import { isAuthenticated } from 'authenticare/client'
import { UserContext, updateUserContext } from './UserContext'

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
    <div className='container-footer'>
      <Nav />
      <BrowseListings />
      <Footer />
    </div>
  )
}

export default Home
