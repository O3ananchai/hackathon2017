const Booking = require('mongoose').model('Booking')

module.exports = ownerId =>
  Booking.find({ owner: ownerId }, { slip: 0 }).populate('customer')
