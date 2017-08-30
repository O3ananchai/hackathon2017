const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const keys = require('../config/keys')
const Customer = require('mongoose').model('Customer')

passport.serializeUser((customer, done) => {
  done(null, customer.id)
})

passport.deserializeUser(async (id, done) => {
  const customer = await Customer.findById(id)
  done(null, customer)
})

const authenticate = async (accessToken, refreshToken, profile, done) => {
  const existingCustomer = await Customer.findOne({ oAuthId: profile.id })
  if (existingCustomer) {
    done(null, existingCustomer)
  } else {
    const newCustomer = await Customer.create({
      oAuthId: profile.id,
      displayName: profile.displayName
    })
    done(null, newCustomer)
  }
}

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      // callbackURL: 'http://hackathon2017.com/api/auth/facebook/callback',
      callbackURL: 'http://52.187.191.138/api/auth/facebook/callback',
      proxy: true
    },
    authenticate
  )
)

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: 'http://52.187.191.138/api/auth/google/callback'
    },
    authenticate
  )
)
