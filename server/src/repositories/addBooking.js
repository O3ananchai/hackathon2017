const Booking = require('mongoose').model('Booking')
const Room = require('mongoose').model('Room')

module.exports = async bookingProps => {
  const [bookingRes, roomRes] = await Promise.all([
    Booking.create(bookingProps),
    Room.update({ _id: bookingProps.room._id }, { status: 1 })
  ])
  return { bookingRes, roomRes }
}
