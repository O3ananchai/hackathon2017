const router = require('express').Router()
const passport = require('passport')
const c = require('../controllers')
const requireAuth = require('../middlewares/requireAuth')
const bookingsReport = require('../reports/bookings')

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)
router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/search-room',
    failureRedirect: '/sign-in'
  })
)
router.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['user_about_me', 'manage_pages', 'email']
  })
)
router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/search-room',
    failureRedirect: '/sign-in'
  })
)
router.get('/reports/bookings', bookingsReport)
router.get('/owners', c.getOwnersList)
router.get('/rooms', c.getRoomsList)
router.get('/rooms/:id', c.getRoom)
router.get('/bookings', c.getBookingsList)
router.get('/bookings/:id', c.getBooking)
router.put('/bookings', requireAuth, c.updateBooking)
router.post('/bookings', requireAuth, c.addBooking)
router.get('/current-user', (req, res) => res.send(req.user))
router.get('/sign-out', (req, res) => {
  req.logout()
  return res.redirect('/')
})

module.exports = router
