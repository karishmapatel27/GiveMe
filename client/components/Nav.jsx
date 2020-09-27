import React from 'react'
// import Link from 'react-dom'

import CategoriesMenu from './CategoriesMenu'
function Nav () {
  return (
    <div className='alingElementNav'>
      <img className="nav-logo" src='./img/logo-txt-orange.png' />
      <div className='alingSearchBar'>
        <input className="input is-rounded is-small searchBar " id="searchbar " name="searchbar" placeholder="Search" type="email" />
        <CategoriesMenu/>
      </div>
    </div >
  )
}
export default Nav
