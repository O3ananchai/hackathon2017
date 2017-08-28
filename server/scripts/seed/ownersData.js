const Owner = require('mongoose').model('Owner')
const faker = require('faker')
const _ = require('lodash')

const owners = [
  {
    name: 'บ้านป้าแย้ม',
    phoneNumber: faker.phone.phoneNumberFormat()
  },
  {
    name: 'บ้าน CDG',
    phoneNumber: faker.phone.phoneNumberFormat()
  }
]

module.exports = _.map(owners, owner => new Owner(owner))
