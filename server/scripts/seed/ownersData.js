const Owner = require('mongoose').model('Owner')
const faker = require('faker')
const _ = require('lodash')

const owners = []

_.times(2, () => {
  owners.push({
    name: faker.name.findName(),
    phoneNumber: faker.phone.phoneNumberFormat()
  })
})

module.exports = _.map(owners, owner => new Owner(owner))
