exports.seed = knex =>
  knex('items').del()
    .then(() => knex('items').insert([
      {
        id: 1,
        name: 'couch',
        category: 'furniture',
        photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.livingspaces.com%2Fglobalassets%2Fproductassets%2F200000-299999%2F220000-229999%2F225000-225999%2F225800-225899%2F225882%2F225882_grey_fabric_sofa_1.jpg%3Fw%3D1911%26h%3D1288%26mode%3Dpad&f=1&nofb=1 ',
        description: ' Farmers Luca Max 2 1/2 seater couch approx 2-3 years old. Grey in very good condition.Pick up Only from Mission Bay ',
        location: 'Auckland'
      },
      {
        id: 2,
        name: 'lego',
        category: 'toys',
        photo: 'https://trademe.tmcdn.co.nz/photoserver/full/1405703228.jpg',
        description: 'LEGO Ghostbusters 75828 Ecto-1&2 556 pieces  Ages 8-14 This is a retired set.Built once, dismantled and in perfect condition. Has been bagged as original packaging.Will be sent in strong protective packaging to avoid damage to LEGO box and contents.',
        location: 'Wellington'
      },
      {
        id: 3,
        name: 'Eletric bike',
        category: 'toys',
        photo: 'https://trademe.tmcdn.co.nz/photoserver/full/1407501540.jpg ',
        description: 'Brand new 26" Hotebike 36V 13AH electric bike. Two mode: pedal assistant mode or pure electric with throttle.Our physical store in Auckland, Open 7 days a week. Welcome to try the Electric Bike before buying. You can find us in https://www.trademe.co.nz/stores/kiwi-grab/contact product video: https://www.youtube.com/watch?v=wAfVQcmvN9Y Motor: 36V300W Max speed 30-35km/h Range: 40 -60km WATERPROOF- YES Electric Bike Features: Battery: 36V13AH( LG battery ) hidden in frame with key Rear Rack and Mudguard included Gear: Shimano 21 speed with derailleu Aluminum alloy frame Max load: 150KG Net weight 21KG Motor: 36V300W Tire: Kenda 26"*1.95 Brake lever: Front and back 160 disck br Display: LCD3 with 5 speed lever 5 adjustable speed, 1:1 pedal assistant LED headlight with charging por Front fork: Aluminum alloy suspension Aluminum alloy pedal Electric Bike Mountain bike saddle Full charging time: about 6 hours 1 Year warranty for the Electric Bike',
        location: 'Christchurch'
      },
      {
        id: 4,
        name: 'Harry Potter Set 7 Books',
        category: 'books',
        photo: 'https://trademe.tmcdn.co.nz/photoserver/full/1181336705.jpg ',
        description: 'Harry Potter Set 7 Books Harry Potter Special Edition Complete Series Harry Potter Special Edition Complete Series Harry Potter Box Set 7 Books - Blue Boxed',
        location: 'Hamilton'
      },
      {
        id: 5,
        name: 'BathBlocks Bathtime Consruction Building Toy',
        category: 'toys',
        photo: 'https://trademe.tmcdn.co.nz/photoserver/full/1371146130.jpg',
        description: 'Bath Blocks Coast Guard & Helicopter lets children build floating bridges towers and more in the bath The Coast Guard Boat and Helicopter add fun and imaginative play to the floating plays capes Sometimes the most educational toys ',
        location: 'Tauranga'
      },
      {
        id: 6,
        name: 'Classic Case of Dr. Seuss 20 Books Set',
        category: 'books',
        photo: '',
        description: 'Classic Case of Dr. Seuss - 20 Books Set A wonderful slipcase collection of 20 classic Dr. Seuss titles in paperback. A classic collection of twenty of Dr. Seuss’s best-loved stories – in one wonderful boxed set',
        location: 'Lower Hutt'
      },
      {
        id: 7,
        name: 'Outdoor Furniture ',
        category: 'furniture',
        photo: 'https://trademe.tmcdn.co.nz/photoserver/full/1392053924.jpg',
        description: 'This outdoor dining table from the Malibu range will be beautiful addition to your outdoor entertainment area!',
        location: 'Dunedin'
      },
      {
        id: 8,
        name: 'books',
        category: 'random',
        photo: 'ihttps://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpgmg',
        description: 'These are books',
        location: 'Palmerson North'
      },
      {
        id: 9,
        name: 'books',
        category: 'random',
        photo: 'ihttps://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpgmg',
        description: 'These are books',
        location: 'Napier'
      }

    ]))
