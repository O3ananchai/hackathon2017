const Booking = require('mongoose').model('Booking')

module.exports = ownerId =>
  Booking.find({ owner: ownerId }).populate('customer')
