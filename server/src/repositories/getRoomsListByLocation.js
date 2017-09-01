const Room = require('mongoose').model('Room')

module.exports = () => {
  return Room.find().populate('owner')
}
