const knex = require('knex')
const items = require('./items')
const config = require('./db/knexfile').test
const testDb = knex(config)

test('getItems returns the correct number of items', () => {
  return items.getItems(testDb)
    .then(items => {
      expect(items).toHaveLength(7)
      return null
    })
})

test('getItem returns the correct item', () => {
  return items.getItem(1, testDb)
    .then(item => {
      expect(item.name).toMatch('couch')
      expect(item.description).toMatch('Farmers')
    })
})

test('getItemsByName returns the correct items', () => {
  return items.getItemsByName('couch', testDb)
    .then(item => {
      return expect(item.id).toEqual(1)
    })
})

test('getItemsByDescription returns the correct items', () => {
  return items.getItemsByDescription('Lego', testDb)
    .then(items => {
      return expect(items.name).toMatch('lego')
    })
})

test('getItemsByCategory returns the correct items', () => {
  return items.getItemsByCategory('toys', testDb)
    .then(items => {
      return expect(items).toHaveLength(3)
    })
})
