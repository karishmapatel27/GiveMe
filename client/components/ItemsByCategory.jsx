import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { getItemCategory } from '../apiClient'

function ItemsByCategory (props) {
  const [category, setItems] = useState({
    itemsName: []
  })
  useEffect(() => {
    getItemCategory(props.match.params.category)
      .then((res) => {
        return setItems(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  return (
    <div>
      <Nav/>
      <div>
        <ul className="imageGridContainer" >
          {category.itemsName.map((item) => {
            return <li className="imageGridItem" key={item.id}>
              <li key={item.id} item={category} />

            </li>
          })}
        </ul>
      </div>
      <Footer/>
    </div>
  )
}

export default ItemsByCategory
