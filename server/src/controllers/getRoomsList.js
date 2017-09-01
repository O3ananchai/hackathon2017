const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const { startPrice, endPrice } = req.query
  let rooms
  if (startPrice && endPrice) {
    rooms = await repo.getRoomsList(startPrice, endPrice)
  } else {
    rooms = await repo.getRoomsListByLocation(req.query)
  }
  return res.send(rooms)
}
