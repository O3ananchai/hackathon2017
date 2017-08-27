const Booking = require('mongoose').model('Booking')

module.exports = bookingProps =>
  Booking.update({ _id: bookingProps.bookingId }, { $set: bookingProps })
