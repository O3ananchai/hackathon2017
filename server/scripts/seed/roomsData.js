const faker = require('faker')
const _ = require('lodash')

const owners = require('./ownersData')

const rooms = []

_.times(1000, () => {
  rooms.push({
    owner: owners[_.random(owners.length - 1)]._id,
    address: faker.address.country(),
    price: _.random(500, 12000),
    status: 0
  })
})

module.exports = rooms
