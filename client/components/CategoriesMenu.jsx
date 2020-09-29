import React, { useState } from 'react'

function CategoriesMenu () {
  const [isActive, setActive] = useState(false)

  const handleToggle = () => {
    switch (isActive) {
      case false: setActive(true)
        break
      case true: setActive(false)
        break
    }
  }

  return (
    <div >
      <div className={isActive ? 'dropdown is-active' : 'dropdown'}>
        <div className="dropdown-trigger">
          <button onClick={handleToggle} className="button primaryBtn " aria-haspopup="true" aria-controls="dropdown-menu3">
            Categories
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content">

            <a href="#" className="dropdown-item">Books</a>

            <a href="#" className="dropdown-item">Furniture</a>

            <a href="#" className="dropdown-item">Toys</a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesMenu

// {items.items.map((item) => {
//   return <li className="imageGridItem" key={item.id} >
//     {item.category}
//   </li>
