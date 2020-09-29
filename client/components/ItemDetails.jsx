import React, { useState, useEffect } from 'react'
import { getItem } from '../apiClient'
import Nav from './Nav'
import Footer from './Footer'

export default function ItemDetails (props) {
  const [item, setItem] = useState({
    item: {}
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
  console.log(item.name)
  return (
    <div className='container-footer'>
      <Nav/>
      <div className="formDetail">
        <div className="detail">
          <div className='itemName'>

            <img
              src={item.photo}
              style={{ width: '200px', height: '200px' }}
              alt=''
            />
          </div>

          <div className='itemDisplay'>
            <h1>
              {item.name}
            </h1>
            <br/>
            <p>
              {/* Category: {item.category} */}
            </p>
            <p>
              Description: {item.description}
            </p>
            <br/>
            <br/>
            <p>
            Location: {item.location}
            </p>

            <p>
              Username: {item.username}
            </p>

            <p>
              Email: {item.email}
            </p>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
