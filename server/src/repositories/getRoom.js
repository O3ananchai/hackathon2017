const Room = require('../models/room')

module.exports = roomId => Room.findById(roomId).populate('owner')
