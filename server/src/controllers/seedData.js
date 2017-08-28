const mongoose = require('mongoose')

const owners = require('../../scripts/seed/ownersData')
const rooms = require('../../scripts/seed/roomsData')

const Owner = mongoose.model('Owner')
const Room = mongoose.model('Room')

module.exports = async (req, res, next) => {
  await mongoose.connection.db.dropDatabase()
  await Promise.all([Owner.insertMany(owners), Room.insertMany(rooms)])
  mongoose.connection.close()
  res.send('Seed data completed')
}
