import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Item from './Item'
import { getItemCategory } from '../apiClient'

function ItemsByCategory (props) {
  const [category, setItems] = useState([])
  useEffect(() => {
    getItemCategory(props.match.params.category)
      .then((res) => {
        return setItems(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [props.match.params])
  return (
    <div className='globalBackground'>
      <div className='container-footer'>
        <Nav/>
        <ul className="imageGridContainer">
          {category.map((item) => {
            return <li className="imageGridItem" key={item.id}>
              <Item item={item} />
            </li>
          })}
        </ul>

        <Footer/>
      </div>
    </div>
  )
}

export default ItemsByCategory
