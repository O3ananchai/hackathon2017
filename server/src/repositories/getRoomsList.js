const Room = require('mongoose').model('Room')

module.exports = (startPrice, endPrice) => {
  const find =
    endPrice !== '0'
      ? { price: { $gte: startPrice, $lte: endPrice } }
      : { price: { $gte: startPrice } }
  find.status = 0
  return Room.find(find, {}, { sort: { price: 1 } }).populate('owner')
}
