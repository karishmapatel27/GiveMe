import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import { addItem } from '../apiClient'
import Nav from './Nav'

function ListAnItem() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [photo, setPhoto] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')

  const item = { name, category, photo, description, location }

  function handleSubmit(e) {
    e.preventDefault()
    // addItem(name, category, photo, description, location)
    addItem(item)
  }

  return (
    <>
    <Nav/>
      <div className="itemForm">

        <div className='imgContainer'>
          <img className="cityImg" src='./img/city.png'></img>
        </div>

        <div className="formRight">
          <h1>List a new item</h1>
          <form onSubmit={handleSubmit}>

            <input className="formInput" type="text" name="name" placeholder="Item Name" value={name} onChange={event => setName(event.target.value)}/>

            <input className="formInput" type="text" name="category" placeholder="Category" value={category} onChange={event => setCategory(event.target.value)}/>

            <ImageUpload value={photo} onChange={event => setPhoto(event.target.value)} />

            <textarea className="textarea" placeholder="Item Description" name="description" value={description} onChange={event => setDescription(event.target.value)} />

            <input className="formInput" type="text" placeholder="Location" name="location" value={location} onChange={event => setLocation(event.target.value)}/>

            <button className="button primaryBtn">Add Item</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ListAnItem
