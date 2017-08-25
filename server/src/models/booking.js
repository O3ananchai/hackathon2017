const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  room: {
    _id: Schema.Types.ObjectId,
    address: String,
    width: Number,
    long: Number,
    price: Number,
    pledge: Number
  },
  startDate: Date,
  endDate: Date
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
