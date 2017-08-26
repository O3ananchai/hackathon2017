const Owner = require('mongoose').model('Owner')

module.exports = () => Owner.find()
