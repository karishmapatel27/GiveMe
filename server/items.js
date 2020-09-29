const config = require('../server/db/knexfile').development
const db = require('knex')(config)

module.exports = {
  getItems,
  getItem,
  addItem
}

function getItems () {
  return db('items')
    .select('id', 'name', 'category', 'photo', 'description', 'location')
}

function getItem (id) {
  console.log(id)
  return db('items')
    .select('id', 'name', 'category', 'photo', 'description', 'location')
    .where('id', id)
    .first()
}


function addItem (itemData) {
  return db('items')
    .insert(itemData)
}

// function getItems (db = connection) {
//   return Promise.resolve([...items])
// }

// function getItem (db = connection, id) {
//   const item = items.find(i => i.id === id)
//   return Promise.resolve({ ...item })
// }

// function addItem (db = connection, item) {
//   item.id = getNewId()
//   items.push(item)
//   return Promise.resolve([...items])
// }

// function getNewId (db = connection) {
//   const lastItem = items[items.length - 1]
//   return lastItem ? lastItem.id + 1 : 1
// }

// function deleteItem (db = connection, id) {
//   return db('items')
//     .where('items.id', id)
//     .delete()
// }

// function updateItem (db = connection, id, itemData) {
//   return db('items')
//     .where('items.id', id)
//     .update(itemData)
// }
