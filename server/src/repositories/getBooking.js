const Booking = require('mongoose').model('Booking')

module.exports = bookingId => Booking.findById(bookingId, { slip: 1 })
