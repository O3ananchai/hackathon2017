const Booking = require('mongoose').model('Booking')

module.exports = customerId =>
  Booking.find({ customer: customerId, slip: { $exists: false } })
