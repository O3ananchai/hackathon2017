require('../services/passport')
const passport = require('passport')
const c = require('../controllers')

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  )
  app.get('/auth/google/callback', passport.authenticate('google'))
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['user_about_me', 'manage_pages', 'email']
    })
  )
  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/'
    })
  )
  app.get('/rooms', c.getRoomsList)
  app.get('/rooms/:id', c.getRoom)
}
