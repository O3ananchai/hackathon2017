const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const { startPrice, endPrice } = req.query
  const rooms = await repo.getRoomsList(startPrice, endPrice)
  return res.send(rooms)
}
