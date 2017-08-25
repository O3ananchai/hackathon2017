const faker = require('faker')
const _ = require('lodash')

const owners = require('./ownersData')

const rooms = []

_.times(1000, () => {
  rooms.push({
    owner: owners[_.random(owners.length - 1)]._id,
    address: faker.address.country(),
    width: _.random(3, 5),
    long: _.random(5, 8),
    price: _.random(500, 12000),
    pledge: _.random(2, 5),
    status: 0
  })
})

module.exports = rooms
