import React, { useState, useEffect } from 'react'
import { getItem } from '../apiClient'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

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
  // console.log(item.name)
  return (
    <div className="globalBackground">
      <div className='container-footer'>
        <Nav/>
        <div className="formDetail">
          <div className="detail">
            <div className='itemName'>

              <img
                src={item.photo}
                style={{ width: '300px', height: '300px' }}
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

              <p>
            Location: {item.location}
              </p>
              <br/>
              <IfAuthenticated>
                <p>
              Username: {item.username}
                </p>
                <p>
              Email: {item.email}
                </p>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <Link to='/signin' className="highlight">Please register or sign in to get the contact details</Link>

              </IfNotAuthenticated>

            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
