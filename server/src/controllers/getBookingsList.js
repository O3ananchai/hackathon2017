const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const customerId = req.user._id
  const bookings = await repo.getNoSlipBookingsList(customerId)
  return res.send(bookings)
}
