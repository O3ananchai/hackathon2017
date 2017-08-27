const Booking = require('mongoose').model('Booking')

module.exports = bookingProps => Booking.create(bookingProps)
