import React, { useState, useEffect } from 'react'

import { getItems } from '../apiClient'

import Item from './Item'

export default function BrowseListings() {
  const [items, setItems] = useState({
    items: []
  })
  useEffect(() => {
    getItems()
      .then((res) => {
        return setItems(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  return (
    <>
      <div>
        <ul className="imageGridContainer" >
          {items.items.map((item) => {
            return <li className="imageGridItem" key={item.id}>
              <Item key={item.id} item={item} /></li>
          })}
        </ul>
      </div>
    </>
  )
}
