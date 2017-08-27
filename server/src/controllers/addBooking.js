const moment = require('moment')
const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const roomProps = req.body
  const bookingProps = {
    customer: req.user._id,
    owner: roomProps.owner._id,
    room: roomProps,
    startDate: moment(),
    endDate: moment().add(1, 'y')
  }
  const booking = await repo.addBooking(bookingProps)
  res.send(booking)
}
