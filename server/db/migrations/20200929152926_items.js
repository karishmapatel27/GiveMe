const cloudinary = require('cloudinary').v2

exports.up = (knex) => {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('name')
    table.string('category')
    table.binary('photo')
    table.string('description')
    table.string('location')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('items')
}
