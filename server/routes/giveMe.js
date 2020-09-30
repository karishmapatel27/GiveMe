const express = require('express')

const items = require('../items')

const router = express.Router()

const utils = require('../db/utils')

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

router.get('/searchresults/:searchinput', (req, res) => {
  const searchinput = (req.params.searchinput)
  Promise.all([items.searchItemsByName(searchinput), items.searchItemsByDescription(searchinput), items.searchItemsByCategory(searchinput)])
    .then((searchResults) => {
      const ids = new Set()
      const results = searchResults.flat().filter(result => {
        const keep = !ids.has(result.id)
        ids.add(result.id)
        return keep
      })
      return res.json(results)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  const newItem = {
    user_id: req.body.userId,
    name: req.body.name,
    category: req.body.category,
    photo: req.body.photo,
    description: req.body.description,
    location: req.body.location
  }
  return items.addItem(newItem)
    .then(ids => {
      return items.getItem(ids[0])
        .then(result => {
          const returnedItem = utils.mapResult([result])
          res.json(returnedItem)
          return null
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
