const Room = require('mongoose').model('Room')

module.exports = roomId => Room.findById(roomId).populate('owner')
