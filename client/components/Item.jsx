import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ item }) {
  const itemID = String(item.id)

  return (
    <div className='card-flex-item card'>
      <div className='has-text-centered mb-4'>
        <Link to={`/ItemDetails/${itemID}`}>
          <img src={item.photo} />
        </Link>
        <Link to={`/ItemDetails/${itemID}`}>
          <h4 className='has-text-centered mt-3'>{item.name}</h4>
        </Link>
      </div>
    </div>
  )
}
