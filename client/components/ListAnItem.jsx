import React, { useState, useContext } from 'react'
import ImageUpload from './ImageUpload'
import { addItem } from '../apiClient'
import Nav from './Nav'
import Footer from './Footer'
import { UserContext } from './UserContext'

function ListAnItem (props) {
  const [id, setId] = useState({
    id: null
  })
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [photo, setPhoto] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [user, setUser] = useContext(UserContext)

  function handleSubmit (e) {
    e.preventDefault()
    addItem({ userId: user.id, name, category, photo, description, location })

    return props.history.push('/Home')
  }

  console.log('signed in id: ', user.id)

  return (
    <div className="globalBackground">
      <div className='container-footer'>
        <Nav/>
        <div className="itemForm">

          <div className='imgContainer'>
            <img className="cityImg" src='./img/city.png'></img>
          </div>

          <div className="formRight">
            <h1>List a new item</h1>
            <form onSubmit={handleSubmit}>

              <input type="hidden" name="id" value={id} onChange={event => setUser(event.target.value)}/>

              <input className="formInput" type="text" name="name" placeholder="Item Name" value={name} onChange={event => setName(event.target.value)}/>

              <input className="formInput" type="text" name="category" placeholder="Category" value={category} onChange={event => setCategory(event.target.value)}/>

              <ImageUpload onChange={url => setPhoto(url)}/>

              <textarea className="textarea" placeholder="Item Description" name="description" value={description} onChange={event => setDescription(event.target.value)} />

              <input className="formInput" type="text" placeholder="Location" name="location" value={location} onChange={event => setLocation(event.target.value)}/>

              <button className="button primaryBtn">Add Item</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default ListAnItem
