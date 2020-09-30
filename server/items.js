const config = require('../server/db/knexfile').development
const db = require('knex')(config)

module.exports = {
  getItems,
  getItem,
  addItem,
  searchItemsByName,
  searchItemsByDescription,
  searchItemsByCategory,
  getItemsByCategory
}

function getItems () {
  return db('items')
    .select('id', 'name', 'category', 'photo', 'description', 'location')
}

function getItem (id) {
  console.log(id)
  return db('items')
    .join('users', 'items.user_id', 'users.id')
    .select('items.id as itemId', 'name', 'category', 'photo', 'description', 'location', 'users.username as username', 'users.email as email')
    .where('itemId', id)
    .first()
}

function addItem (itemData) {
  return db('items')
    .insert(itemData)
}

function searchItemsByName (name) {
  console.log(name)
  return db('items')
    .select('id', 'name', 'category', 'photo', 'description', 'location')
    .where('name', 'like', `%${name}%`)
}

function searchItemsByDescription (description) {
  return db('items')
    .select('id', 'name', 'category', 'photo', 'description', 'location')
    .where('description', 'like', `%${description}%`)
}

function searchItemsByCategory (category) {
  return db('items')
    .select('id', 'name', 'category', 'photo', 'description', 'location')
    .where('category', 'like', `%${category}%`)
}
function getItemsByCategory (category) {
  return db('items')
    .select('id', 'category', 'photo', 'description', 'location')
    . where('category', category)
}

// function displayContact (id) {
//   return db('users')
//     .join('items', 'users.id', 'items.user_id')
//     .where('users.id', id)
//     .select('username', 'email')
//     .first()
//     .then(result => ({
//       username: result.username,
//       email: result.email
//     }))
// }
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
