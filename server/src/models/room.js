const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Owner'
  },
  address: String,
  size: String,
  price: { type: Number, default: 0 },
  pledge: String,
  status: Number
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room
