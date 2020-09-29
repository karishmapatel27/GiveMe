exports.seed = knex =>
  knex('items').del()
    .then(() => knex('items').insert([
      {
        id: 1,
        user_id: 1,
        name: 'couch',
        category: 'furniture',
        photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.livingspaces.com%2Fglobalassets%2Fproductassets%2F200000-299999%2F220000-229999%2F225000-225999%2F225800-225899%2F225882%2F225882_grey_fabric_sofa_1.jpg%3Fw%3D1911%26h%3D1288%26mode%3Dpad&f=1&nofb=1 ',
        description: ' Farmers Luca Max 2 1/2 seater couch approx 2-3 years old. Grey in very good condition.Pick up Only from Mission Bay ',
        location: 'Auckland'
      },
      {
        id: 2,
        user_id: 1,
        name: 'lego',
        category: 'toys',
        photo: 'https://trademe.tmcdn.co.nz/photoserver/full/1405703228.jpg',
        description: 'LEGO Ghostbusters 75828 Ecto-1&2 556 pieces  Ages 8-14 This is a retired set.Built once, dismantled and in perfect condition. Has been bagged as original packaging.Will be sent in strong protective packaging to avoid damage to LEGO box and contents.',
        location: 'Wellington'
      },
      {
        id: 3,
        user_id: 2,
        name: 'Eletric bike',
        category: 'toys',
        photo: 'https://trademe.tmcdn.co.nz/photoserver/full/1407501540.jpg ',
        description: 'Brand new 26" Hotebike 36V 13AH electric bike. Two mode: pedal assistant mode or pure electric with throttle.Our physical store in Auckland, Open 7 days a week. Welcome to try the Electric Bike before buying.',
        location: 'Christchurch'
      },
      {
        id: 4,
        user_id: 2,
        name: 'Harry Potter Set 7 Books',
        category: 'books',
        photo: 'https://trademe.tmcdn.co.nz/photoserver/full/1181336705.jpg ',
        description: 'Harry Potter Set 7 Books Harry Potter Special Edition Complete Series Harry Potter Special Edition Complete Series Harry Potter Box Set 7 Books - Blue Boxed',
        location: 'Hamilton'
      },
      {
        id: 5,
        user_id: 3,
        name: 'Consruction Building Toy',
        category: 'toys',
        photo: 'https://trademe.tmcdn.co.nz/photoserver/full/1371146130.jpg',
        description: 'Bath Blocks Coast Guard & Helicopter lets children build floating bridges towers and more in the bath The Coast Guard Boat and Helicopter add fun and imaginative play to the floating plays capes Sometimes the most educational toys ',
        location: 'Tauranga'
      },
      {
        id: 6,
        user_id: 4,
        name: 'Dr. Seuss 20 Books Set',
        category: 'books',
        photo: 'https://i.ebayimg.com/images/i/351875792148-0-1/s-l1000.jpg',
        description: 'Classic Case of Dr. Seuss - 20 Books Set A wonderful slipcase collection of 20 classic Dr. Seuss titles in paperback. A classic collection of twenty of Dr. Seuss’s best-loved stories – in one wonderful boxed set',
        location: 'Lower Hutt'
      },
      {
        id: 7,
        user_id: 5,
        name: 'Outdoor Furniture ',
        category: 'furniture',
        photo: 'https://www.ana-white.com/sites/default/files/3154847793_1404436799.jpg',
        description: 'This outdoor dining table from the Malibu range will be beautiful addition to your outdoor entertainment area!',
        location: 'Dunedin'
      }
    ]))
