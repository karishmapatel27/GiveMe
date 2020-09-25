const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getGiveMe
}

function getGiveMe (db = connection) {
  return db('getGiveMe').select()
    .catch(err => {
      console.error(err)
      throw err
    })
}

// function saveImage ()
