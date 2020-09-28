import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getItems } from '../apiClient'

import Item from './Item'

export default function Items () {
  const [items, setItems] = useState({
    items: []
  })
  useEffect(() => {
    getItems()
      .then((res) => {
        setItems(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  return (
    <>
      <div className="itemDisplay">
        <div className="displayTitle">
          <hr />
          <h2>Browse Listings</h2>
          <hr />
        </div>
        <div className="card-flex-wrapper column is-three-quarters">
          {items.items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}
