const mongoose = require('mongoose')

const { Schema } = mongoose

const customerSchema = new Schema({
  oAuthId: String,
  displayName: String
})

mongoose.model('Customer', customerSchema)
