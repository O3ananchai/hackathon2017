const mongoose = require('mongoose')

const { Schema } = mongoose

const customerSchema = new Schema({
  oAuthId: String,
  displayName: String
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
