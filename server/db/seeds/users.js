

const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('admin'),
      generateHash('ben'),
      generateHash('karishma'),
      generateHash('kahu'),
      generateHash('rafael'),
    ]))
    .then(([adminHash, benHash, karishmaHash, kahuHash, rafaelHash]) =>
      knex('users').insert([
        { id: 1, username: 'admin', hash: adminHash, isAdmin: true },
        { id: 2, username: 'ben', hash: benHash, isAdmin: false },
        { id: 3, username: 'karishma', hash: karishmaHash, isAdmin: false },
        { id: 4,username: 'kahu', hash: kahuHash, isAdmin: false },
        { id: 5,username: 'rafael', hash: rafaelHash, isAdmin: false },
      ])
    )
}