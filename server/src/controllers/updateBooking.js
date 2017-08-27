const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const bookingProps = req.body
  const booking = await repo.updateBooking(bookingProps)
  return res.send(booking)
}
