import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import { addItem } from '../apiClient'

function ListAnItem () {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [photo, setPhoto] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')

  const item = { name, category, photo, description, location }

  function handleSubmit (e) {
    e.preventDefault()
    // addItem(name, category, photo, description, location)
    addItem(item)
  }

  return (
    <>
      <div className="list-item-form columns is-8">
        <div className="column">
          <h1>List new item</h1>
          <form onSubmit={ handleSubmit }>
            <h5>Item Name</h5>

            <input className="input is-normal" type="text"
              placeholder="Item Name"
              name="name"
              value={name} onChange={event => setName(event.target.value)}/>

            <h5>Category</h5>
            <input className="input is-normal" type="text"
              placeholder="Item Category"
              name="category"
              value={category} onChange={event => setCategory(event.target.value)}/>

            <ImageUpload value={photo} onChange={event => setPhoto(event.target.value)}/>

            <h5>Item Description</h5>
            <textarea className="textarea is-normal"
              placeholder="Item Description"
              name="description"
              value={description} onChange={event => setDescription(event.target.value)}/>

            <h5>Location</h5>
            <input className="input is-normal" type="text"
              placeholder="location"
              name="location"
              value={location} onChange={event => setLocation(event.target.value)}/>
            <button className="button my-4 is-primary">Add Item</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ListAnItem

