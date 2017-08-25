const faker = require('faker')
const _ = require('lodash')

const Owner = require('../../src/models/owner')

const owners = []

_.times(2, () => {
  owners.push({
    name: faker.name.findName(),
    phoneNumber: faker.phone.phoneNumberFormat()
  })
})

module.exports = _.map(owners, owner => new Owner(owner))
