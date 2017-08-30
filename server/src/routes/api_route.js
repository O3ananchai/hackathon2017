const router = require('express').Router()
const c = require('../controllers')

router.get('/owners', c.getOwnersList)
router.get('/owners/version', (req, res) => res.send({ version: '1' }))

module.exports = router
