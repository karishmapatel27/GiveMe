const express = require('express')

const db = require('../db')

const router = express.Router()

const utils = require('../db/utils')

router.get('/', (req, res) => {
  db.getItems()
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
  db.addItem(newItem)
    .then(ids => {
      db.getItem(ids[0])
        .then(result => {
          const returnedItem = utils.mapResult([result])
          res.json(returnedItem)
        })
    })
})

module.exports = router
