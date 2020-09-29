const knex = require('knex')
const items = require('./items')
const config = require('./db/knexfile').test
const testDb = knex(config)

test('getItem returns the correct user', () => {
  return items.getItemById(1, testDb)
    .then(item => {
      return expect(item.name).toMatch('couch')
    })
})
