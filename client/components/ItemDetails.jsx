import React, { useState, useEffect } from 'react'
import { getItem } from '../apiClient'
import Nav from './Nav'
import Footer from './Footer'

export default function ItemDetails (props) {
  const [item, setItem] = useState({
    item: []
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
            <strong>{item.name}</strong>
          </h2>
        </div>

        <div className='itemDisplay'>
          <br></br>
          <img
            src={item.photo}
            style={{ width: '200px', height: '200px' }}
            alt=''
          />
          <br></br>
          <p>
            <strong>Category: {item.category} </strong>
          </p>
          <p>
            <strong>Description: {item.description} </strong>
          </p>

          <br></br>
          <br></br>
          <p>
            <strong>Location: {item.location} </strong>
          </p>

        </div>
      </div>
      <Footer/>
    </div>
  )
}
