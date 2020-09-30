import React, { useState, useEffect } from 'react'

import { getItemsbySearch } from '../apiClient'

import Item from './Item'
import Nav from './Nav'
import Footer from './Footer'

export default function SearchResults (props) {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItemsbySearch(props.match.params.searchinput)
      .then((res) => {
        return setItems([...res])
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [props.match.params])

  return (
    <div className='globalBackground'>
      <div className='container-footer'>
        <Nav />
        <ul className="imageGridContainer" >
          {items.map((item) => {
            return <li className="imageGridItem" key={item.id}>
              <Item key={item.id} item={item} />
            </li>
          })}
        </ul>
        <Footer />
      </div>
    </div>
  )
}
