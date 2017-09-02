const _ = require('lodash')

const Room = require('mongoose').model('Room')
const Owner = require('mongoose').model('Owner')

module.exports = async ({ lng, lat }) => {
  const [resRooms, resOwners] = await Promise.all([
    Room.geoNear(
      { type: 'Point', coordinates: [Number(lng), Number(lat)] },
      { spherical: true, maxDistance: 2000, query: { status: 0 } }
    ),
    Owner.find()
  ])
  const result = _.map(resRooms, room => {
    room.obj.owner = _.find(resOwners, { _id: room.obj.owner })
    return room
  })
  return Promise.resolve(result)
}
