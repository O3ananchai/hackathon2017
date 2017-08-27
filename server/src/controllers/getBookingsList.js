const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const customerId = req.user._id
  const ownerId = req.query.ownerId
  let bookings
  if (ownerId) {
    bookings = await repo.getBookingsList(ownerId)
  } else {
    bookings = await repo.getNoSlipBookingsList(customerId)
  }
  return res.send(bookings)
}
