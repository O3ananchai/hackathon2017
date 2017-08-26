const mongoose = require('mongoose')

const { Schema } = mongoose

const customerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'กรุณาระบุชื่อ']
  },
  phoneNumber: {
    type: String,
    required: [true, 'กรุณาระบุหมายเลขโทรศัพท์']
  }
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
