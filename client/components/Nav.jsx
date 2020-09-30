import { logOff } from 'authenticare/client/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import SearchBar from './SearchBar'

import CategoriesMenu from './CategoriesMenu'

function Nav() {
  return (
    <div className='alingElementNav'>
      <img className="nav-logo" src='./img/logo-txt-white.png' />

      <div className='alingSearchBar'>
        <SearchBar />
        <CategoriesMenu />
      </div>

      <div className="navLinks">
        <IfAuthenticated>
          <Link className="link" to="/ListAnItem">Add Item</Link>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link className="link" to="/signin">Add Item</Link>
        </IfNotAuthenticated>

        <Link className="link" to="/Home">Home</Link>
        <Link className="link" to="/About">About</Link>
        <Link className="link" to="/ContactUs">Contact Us</Link>
        <IfAuthenticated>
          <Link className="link" to="/signin" onClick={logOff}>Log out</Link>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link className="link" to="/SignIn">Sign In</Link>
        </IfNotAuthenticated>
      </div>
    </div >
  )
}
export default Nav
