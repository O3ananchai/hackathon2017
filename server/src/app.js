const app = require('express')()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const router = require('./routes')
const { MONGO_DB_HOST } = require('./config')
const {
  handleNotFound,
  handleAnotherError,
  detailLogger
} = require('./middlewares')

mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'))
  app.use(detailLogger)
  mongoose.connect(`mongodb://${MONGO_DB_HOST}/gp`, { useMongoClient: true })
}

router(app)

app.use(handleNotFound)
app.use(handleAnotherError)

module.exports = app