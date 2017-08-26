const app = require('express')()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')

require('./models/booking')
require('./models/customer')
require('./models/owner')
require('./models/room')
require('./services/passport')
const router = require('./routes')
const keys = require('./config/keys')
const { MONGO_DB_HOST } = require('./config')
const {
  handleNotFound,
  handleAnotherError,
  detailLogger
} = require('./middlewares')

mongoose.Promise = global.Promise

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'))
  app.use(detailLogger)
  mongoose.connect(`mongodb://${MONGO_DB_HOST}/hackathon`, {
    useMongoClient: true
  })
}

router(app)

app.use(handleNotFound)
app.use(handleAnotherError)

module.exports = app
