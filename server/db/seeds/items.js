exports.seed = knex =>
  knex('items').del()
    .then(() => knex('items').insert([
      {
        id: 1,
        name: 'couch',
        category: 'random',
        photo: 'img',
        description: 'This is a couch', 
        location: 'Auckland'
      },
      {
        id: 2, 
        name: 'lego', 
        category: 'random', 
        photo: 'img', 
        description: 'This is some legos', 
        location: 'Wellington'
      },
      {
        id: 3, 
        name: 'bike', 
        category: 'random', 
        photo: 'img', 
        description: 'This is a bike', 
        location: 'Christchurch'
      },
      {
        id: 4, 
        name: 'books', 
        category: 'random', 
        photo: 'img', 
        description: 'These are books', 
        location: 'Hamilton'
      }
    ]))