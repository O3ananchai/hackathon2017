const repo = require('../repositories')

module.exports = async (req, res, next) => {
  const owners = await repo.getOwnersList()
  return res.send(owners)
}
