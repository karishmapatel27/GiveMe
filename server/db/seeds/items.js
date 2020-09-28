exports.seed = knex =>
  knex('items').del()
    .then(() => knex('items').insert([
      {
        id: 1,
        name: 'couch',
        category: 'random',
        photo: 'https://www.google.com/search?q=couch&safe=off&rlz=1C1CHBF_enNZ892NZ892&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjV9v7p1orsAhXnzDgGHUqIDogQ_AUoAXoECA8QAw&biw=1745&bih=881#imgrc=WOBoBh59E2E8-M',
        description: 'This is a couch',
        location: 'Auckland'
      },
      {
        id: 2,
        name: 'lego',
        category: 'random',
        photo: 'https://static-ppimages.freetls.fastly.net/product/2000057037873-2.jpg?height=600&mode=max&width=600&404=default.jpg',
        description: 'This is some legos',
        location: 'Wellington'
      },
      {
        id: 3,
        name: 'bike',
        category: 'random',
        photo: 'https://electrify.nz/image/cache/catalog/Black%20ATB/atbadjusted-1024x1024.jpg',
        description: 'This is a bike',
        location: 'Christchurch'
      },
      {
        id: 4,
        name: 'books',
        category: 'random',
        photo: 'ihttps://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpgmg',
        description: 'These are books',
        location: 'Hamilton'
      }
    ]))
