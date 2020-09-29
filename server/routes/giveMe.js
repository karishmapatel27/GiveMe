const express = require('express')

const items = require('../items')

const router = express.Router()

const utils = require('../db/utils')
const { route } = require('./auth')

router.get('/', (req, res) => {
  items.getItems()
    .then((items) => {
      return res.json({ items })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/itemdetails/:id', (req, res) => {
  const id = Number(req.params.id)
  items.getItem(id)
    .then((singleItem) => {
      return res.json(singleItem)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  const newItem = {
    name: req.body.name,
    category: req.body.category,
    photo: req.body.photo,
    description: req.body.description,
    location: req.body.location
  }
  items.addItem(newItem)
    .then(ids => {
      items.getItem(ids[0])
        .then(result => {
          const returnedItem = utils.mapResult([result])
          res.json(returnedItem)
        })
    })
})

// router.get('/itemdetails/:id', (req, res) => {
//   const id = Number(req.params.id)
//   items.displayContact(id)
//     .then((singleItem) => {
//       return res.json(singleItem)
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message })
//     })
// })
module.exports = router
