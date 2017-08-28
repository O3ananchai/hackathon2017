const mongoose = require('mongoose')

require('../../src/models/booking')
require('../../src/models/customer')
require('../../src/models/owner')
require('../../src/models/room')
const logger = require('../../src/utils/logger')
const { MONGO_DB_HOST } = require('../../src/config')
const owners = require('./ownersData')
const rooms = require('./roomsData')

const Owner = mongoose.model('Owner')
const Room = mongoose.model('Room')

mongoose.Promise = global.Promise

mongoose.connect(`mongodb://${MONGO_DB_HOST}/hackathon`, {
  useMongoClient: true
})
mongoose.connection.once('open', async () => {
  await mongoose.connection.db.dropDatabase()
  await Promise.all([Owner.insertMany(owners), Room.insertMany(rooms)])
  mongoose.connection.close()
  logger.info('Seed data completed')
})
