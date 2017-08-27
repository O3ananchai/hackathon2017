const mongoose = require('mongoose')

const { Schema } = mongoose

const bookingSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Owner'
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
  endDate: Date,
  slip: String
})

mongoose.model('Booking', bookingSchema)
