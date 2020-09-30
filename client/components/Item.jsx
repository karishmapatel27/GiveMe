import React from 'react'
import { Link } from 'react-router-dom'

export default function Item ({ item }) {
  const itemID = String(item.id)

  return (
    <div className='product-card'>
      <div className='product-tumb'>
        <Link to={`/ItemDetails/${itemID}`}>
          <img src={item.photo} />
        </Link>
      </div>
      <div className="product-details">
        <div className="product-bottom-details">
          <Link to={`/ItemDetails/${itemID}`}>
            <h1 className=''>{item.name}</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}
