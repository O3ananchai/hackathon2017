const router = require('express').Router()
const passport = require('passport')
const c = require('../controllers')

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
router.get('/current-user', (req, res) => res.send(req.user))
router.get('/sign-out', (req, res) => {
  req.logout()
  return res.redirect('/')
})
router.get('/seed', c.seedData)
router.get('/version', (req, res) => res.send({ version: '1' }))

module.exports = router
