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
    <div className={isActive ? 'dropdown is-active' : 'dropdown'}>
      <div className="dropdown-trigger">
        <button onClick={handleToggle} className="button registerBtn " aria-haspopup="true" aria-controls="dropdown-menu3">
          <span>AllCategories</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
        Clothing
          </a>
          <a href="#" className="dropdown-item">
        Books
          </a>
          <a href="#" className="dropdown-item">
        Outdoor
          </a>
          <a href="#" className="dropdown-item">
        Eletronics
          </a>
          <a href="#" className="dropdown-item">
        Homewear
          </a>
          <a href="#" className="dropdown-item">
        Arts
          </a>
          <a href="#" className="dropdown-item">
        Eletronics
          </a>
          <hr className="dropdown-divider"/>
          <a href="#" className="dropdown-item">
        Gamin
          </a>
        </div>
      </div>
    </div>
  )
}

export default CategoriesMenu