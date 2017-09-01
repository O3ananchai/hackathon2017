const Room = require('mongoose').model('Room')

module.exports = ({ lng, lat }) =>
  Room.geoNear(
    { type: 'Point', coordinates: [Number(lng), Number(lat)] },
    { spherical: true, maxDistance: 2000, query: { status: 0 } }
  )
