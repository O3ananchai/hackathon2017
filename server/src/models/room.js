const mongoose = require('mongoose')

const { Schema } = mongoose

const PointSchema = new Schema({
  coordinates: { type: [Number], index: '2dsphere' },
  type: { type: String, default: 'Point' }
})

const roomSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Owner'
  },
  address: String,
  geomtry: PointSchema,
  width: { type: Number, default: 0 },
  long: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  pledge: { type: Number, default: 0 },
  status: { type: Number, default: 0 }
})

mongoose.model('Room', roomSchema)
