import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'
import { UserContext, updateUserContext } from './UserContext'
import { Link } from 'react-router-dom'

import Nav from './Nav'
import GalleryImage from './GalleryImage'
function Home () {
  const [, setUser] = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated()) {
      updateUserContext(setUser)
    }
  }, [])

  return (
    <>
      <Nav/>
      <div className='columns'>
        {/* <Link className="" to="/ListAnItem">Add Item</Link> */}
        {/* <Link to="/ItemDetails">Item Details</Link> */}
      </div>
      <div>
        <p>
          <GalleryImage/>
        </p>
      </div>
    </>

  )
}

export default Home
