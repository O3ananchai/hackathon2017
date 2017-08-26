const Room = require('mongoose').model('Room')

module.exports = (startPrice, endPrice) => {
  const find =
    endPrice !== '0'
      ? { price: { $gte: startPrice, $lte: endPrice } }
      : { price: { $gte: startPrice } }
  return Room.find(find).populate('owner')
}
