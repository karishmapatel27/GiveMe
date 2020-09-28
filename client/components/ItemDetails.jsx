import React, { useState, useEffect } from 'react'
import { getItem } from '../apiClient'

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
    <>
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
          <strong>Description:</strong>
        </p>
        <p>{items.description}</p>
        <br></br>
        <p>
          <strong>Category: </strong>
        </p>
        <p>{items.category}</p>
        <br></br>
        <p>
          <strong>Location: </strong>
        </p>
        <p>{items.location}</p>

      </div>
    </>
  )
}
