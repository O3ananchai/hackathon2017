const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const bookingId = req.params.id
  const booking = await repo.getBooking(bookingId)
  return res.send(booking)
}
