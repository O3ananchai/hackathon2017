const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const ownerId = req.query.ownerId
  let bookings
  if (ownerId) {
    bookings = await repo.getBookingsList(ownerId)
  } else {
    const customerId = req.user._id
    bookings = await repo.getNoSlipBookingsList(customerId)
  }
  return res.send(bookings)
}
