const passport = require('passport')
const c = require('../controllers')
const requireAuth = require('../middlewares/requireAuth')

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  )
  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/search-room',
      failureRedirect: '/sign-in'
    })
  )
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['user_about_me', 'manage_pages', 'email']
    })
  )
  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/search-room',
      failureRedirect: '/sign-in'
    })
  )
  app.get('/api/rooms', c.getRoomsList)
  app.get('/api/rooms/:id', c.getRoom)
  app.get('/api/bookings', c.getBookingsList)
  app.put('/api/bookings', requireAuth, c.updateBooking)
  app.post('/api/bookings', requireAuth, c.addBooking)
  app.get('/api/current-user', (req, res) => res.send(req.user))
  app.get('/api/sign-out', (req, res) => {
    req.logout()
    return res.redirect('/')
  })
}
