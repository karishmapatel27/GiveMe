import React from 'react'

function BrowseListings () {
  return (
    <>
      <div className='container'>
        <div className='columns'>
          <label className="label ">Search</label>
          <input
            className="input "
            id="searchbar"
            name="searchbar"
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
    </>
  )
}

export default BrowseListings
