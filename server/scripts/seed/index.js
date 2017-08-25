const mongoose = require('mongoose')

const logger = require('../../src/utils/logger')
const Owner = require('../../src/models/owner')
const Room = require('../../src/models/room')
const { MONGO_DB_HOST } = require('../../src/config')
const owners = require('./ownersData')
const rooms = require('./roomsData')

mongoose.Promise = global.Promise

mongoose.connect(`mongodb://${MONGO_DB_HOST}/hackathon`)
mongoose.connection.once('open', async () => {
  await mongoose.connection.db.dropDatabase()
  await Promise.all([Owner.insertMany(owners), Room.insertMany(rooms)])
  mongoose.connection.close()
  logger.info('Seed data completed')
})
