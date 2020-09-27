import React from 'react'
import Gallery from 'react-grid-gallery'
import { Link } from 'react-router-dom'

const IMAGES = [
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Ocean', title: 'Ocean' }, { value: 'People', title: 'People' }],
    caption: 'Boats (Jeshu John - designerspics.com)'
  }
]


function GalleryImage () {
  return (
    <div>

      <Link to='/ListAnItem'>
        <Gallery images={IMAGES}/>
      </Link>
    </div>
  )
}

export default GalleryImage
