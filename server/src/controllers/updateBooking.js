const moment = require('moment')
const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const bookingProps = req.body
  bookingProps.slipDate = moment()
  const booking = await repo.updateBooking(bookingProps)
  return res.send(booking)
}
