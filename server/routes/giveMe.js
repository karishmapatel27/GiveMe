const express = require('express')

const items = require('../items')

const router = express.Router()

const utils = require('../db/utils')

router.get('/', (req, res) => {
  items.getItems()
    .then(result => {
      const returnedPosts = utils.mapResult(result)
      res.json(returnedPosts)
      return (null)
    })
    .catch(() => null)
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

module.exports = router
