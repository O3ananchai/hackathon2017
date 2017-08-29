const router = require('express').Router()
const bookingsReport = require('../reports/bookings')

router.get('/reports/bookings', bookingsReport)

module.exports = router
