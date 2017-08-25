const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const roomId = req.params.id
  const room = await repo.getRoom(roomId)
  return res.send(room)
}
