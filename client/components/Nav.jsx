import React from 'react'
// import Link from 'react-dom'

// import categoriesMenu from './CategoriesMenu'
function Nav () {
  return (
    <span className='alingElementNav'>
      <img className="nav-logo" src='./img/logo-white.png' />
      <span className='alingSearchBar'>
        <input
          className="input is-rounded is-medium searchBar "
          id="searchbar "
          name="searchbar"
          placeholder="Search"

          type="email"
        />
      </span>
    </span >
  )
}
export default Nav
