import React from 'react'
import Gallery from 'react-grid-gallery'
import { Link } from 'react-router-dom'
const IMAGES =
[
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Home', title: 'Home' }],
    caption: 'Boats (Jeshu John - designerspics.com)'
  }
  // {
  //   src: 'https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_960_720.jpg',
  //   thumbnail: 'https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_960_720.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   tags: [{ value: 'Ocean', title: 'Ocean' }],
  //   caption: 'Boats (Jeshu John - designerspics.com)',
  //   href: 'https://www.youtube.com/'

  // },
  // {
  //   src: 'https://cdn.pixabay.com/photo/2013/07/18/10/56/gold-163519_960_720.jpg',
  //   thumbnail: 'https://cdn.pixabay.com/photo/2013/07/18/10/56/gold-163519_960_720.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   tags: [{ value: 'Ocean', title: 'Ocean' }],
  //   caption: 'Boats (Jeshu John - designerspics.com)'
  // },
  // {
  //   src: 'https://cdn.pixabay.com/photo/2016/11/21/00/47/view-1844110_960_720.jpg',
  //   thumbnail: 'https://cdn.pixabay.com/photo/2016/11/21/00/47/view-1844110_960_720.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   tags: [{ value: 'Ocean', title: 'Ocean' }, { value: 'People', title: 'People' }],
  //   caption: 'Boats (Jeshu John - designerspics.com)'
  // },
  // {
  //   src: 'https://cdn.pixabay.com/photo/2020/06/19/09/16/fantasy-5316369_960_720.jpg',
  //   thumbnail: 'https://cdn.pixabay.com/photo/2020/06/19/09/16/fantasy-5316369_960_720.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   tags: [{ value: 'Ocean', title: 'Ocean' }, { value: 'People', title: 'People' }],
  //   caption: 'Boats (Jeshu John - designerspics.com)'
  // },
  // {
  //   src: 'https://cdn.pixabay.com/photo/2016/09/07/10/37/kermit-1651325_960_720.jpg',
  //   thumbnail: 'https://cdn.pixabay.com/photo/2016/09/07/10/37/kermit-1651325_960_720.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   tags: [{ value: 'Ocean', title: 'Ocean' }, { value: 'People', title: 'People' }],
  //   caption: 'Boats (Jeshu John - designerspics.com)'
  // }
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
