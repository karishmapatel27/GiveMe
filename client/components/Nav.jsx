import React from 'react'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import CategoriesMenu from './CategoriesMenu'

function Nav () {
  return (
    <div className='alingElementNav'>
      <img className="nav-logo" src='./img/logo-txt-orange.png' />

      <div className='alingSearchBar'>
        <input className="input is-rounded is-small searchBar " id="searchbar " name="searchbar" placeholder="Search" type="email" />
        <CategoriesMenu/>
      </div>

      <div className="navLinks">
        {(!IfAuthenticated ? <Link className="link" to="/ListAnItem">Add Item</Link> : <Link className="link" to="/signin">Add Item</Link>)}
        <Link className="link" to="/Home">Home</Link>
        <Link className="link" to="/About">About</Link>
        <Link className="link" to="/ContactUs">Contact Us</Link>
        <Link className="link highlight" to="/SignIn">Sign In</Link>
      </div>
    </div >
  )
}
export default Nav
