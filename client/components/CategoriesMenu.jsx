import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CategoriesMenu() {
  const [isActive, setActive] = useState(false)

  const handleToggle = () => {
    switch (isActive) {
      case false: setActive(true)
        break
      case true: setActive(false)
        break
    }
  }
  // useEffect(() => {
  //   getItemCategory()
  //     .then((res) => {
  //       return setItems(res)
  //     })
  //     .catch((error) => {
  //       console.log('error: ', error.message)
  //     })
  // }, [])

  return (
    <div >
      <div className={isActive ? 'dropdown is-active' : 'dropdown'}>
        <div className="dropdown-trigger">
          <button onClick={handleToggle} className="button primaryBtn category" aria-haspopup="true" aria-controls="dropdown-menu3">
            Categories
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content">

            <Link to="/categorylist/books" className="dropdown-item">
                Books
            </Link>

            <Link to="/categorylist/furniture" className="dropdown-item">
                Furniture
            </Link>

            <Link to="/categorylist/toys"
              className="dropdown-item">
                Toys
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesMenu
