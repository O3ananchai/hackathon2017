const Room = require('mongoose').model('Room')

module.exports = ({ lng, lat }) => {
  return Room.geoNear(
    { type: 'Point', coordinates: [lng, lat] },
    { spherical: true, maxDistance: 100000 }
  ).populate('owner')
}
