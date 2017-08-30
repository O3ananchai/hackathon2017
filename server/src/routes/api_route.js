const router = require('express').Router()
const bookingsReport = require('../reports/bookings')

router.get('/reports/bookings', bookingsReport)
router.get('/reports/version', (req, res) => res.send({ version: '1' }))

module.exports = router
