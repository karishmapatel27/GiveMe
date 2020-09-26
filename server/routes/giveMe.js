const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getGiveMe()
    .then(getGiveMe => {
      res.json({ getGiveMe })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
