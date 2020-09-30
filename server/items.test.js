const knex = require('knex')
const items = require('./items')
const config = require('./db/knexfile').test
const testDb = knex(config)

test('getItem returns the correct item', () => {
  return items.getItem(1, testDb)
    .then(item => {
      return expect(item.name).toMatch('couch')
    })
})

test('getItemByName returns teh correct item', () => {
  return items.getItemByName('couch', testDb)
    .then(item => {
      return expect(item.id).toEqual(1)
    })
})
