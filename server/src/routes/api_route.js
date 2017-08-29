const router = require('express').Router()
const c = require('../controllers')

router.get('/owners', c.getOwnersList)

module.exports = router
