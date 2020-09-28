import React, { useState, useEffect } from 'react'
import { getItem } from '../apiClient'
import Nav from './Nav'
import Footer from './Footer'

export default function ItemDetails (props) {
  const [items, setItem] = useState({
    items: {}
  })
  useEffect(() => {
    getItem(props.match.params.id)
      .then((res) => {
        setItem(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  return (
    <div className='container-footer'>
      <Nav/>
      <div className="form">
        <div className='itemName'>
          <h2>
            <strong>{items.name}</strong>
          </h2>
        </div>

        <div className='itemDisplay'>
          <br></br>
          <img
            src={items.photo}
            style={{ width: '200px', height: '200px' }}
            alt=''
          />
          <br></br>
          <p>
            <strong>Category: </strong>
          </p>
          <p>
            <strong>Description:</strong>
          </p>
          <p>{items.description}</p>
          <br></br>
          <p>{items.category}</p>
          <br></br>
          <p>
            <strong>Location: </strong>
          </p>
          <p>{items.location}</p>

        </div>
      </div>
      <Footer/>
    </div>
  )
}
