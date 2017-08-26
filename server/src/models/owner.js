const mongoose = require('mongoose')

const { Schema } = mongoose

const ownerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'กรุณาระบุชื่อ']
  },
  phoneNumber: {
    type: String,
    required: [true, 'กรุณาระบุหมายเลขโทรศัพท์']
  }
})

const Owner = mongoose.model('Owner', ownerSchema)

module.exports = Owner
