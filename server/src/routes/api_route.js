const router = require('express').Router()
const c = require('../controllers')

router.get('/rooms', c.getRoomsList)
router.get('/rooms/:id', c.getRoom)

module.exports = router
