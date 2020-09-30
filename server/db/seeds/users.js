const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('admin'),
      generateHash('ben'),
      generateHash('karishma'),
      generateHash('kahu'),
      generateHash('rafael')
    ]))
    .then(([adminHash, benHash, karishmaHash, kahuHash, rafaelHash]) =>
      knex('users').insert([
        { id: 1, username: 'joe', email: 'joe22@gmail.com', hash: adminHash, isAdmin: true },
        { id: 2, username: 'ben', email: 'ben@gmail.com', hash: benHash, isAdmin: false },
        { id: 3, username: 'karishma', email: 'karishmapatel@hotmail.com', hash: karishmaHash, isAdmin: false },
        { id: 4, username: 'kahu', email: 'kahu@outlook.com', hash: kahuHash, isAdmin: false },
        { id: 5, username: 'rafael', email: 'rafael@gmail.com', hash: rafaelHash, isAdmin: false }
      ])
    )
}
