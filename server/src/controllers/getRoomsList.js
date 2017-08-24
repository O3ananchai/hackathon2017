const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const rooms = await repo.getRoomsList()
  return res.send(rooms)
}
