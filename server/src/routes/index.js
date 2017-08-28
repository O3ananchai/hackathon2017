const apiRoute = require('./api_route')

module.exports = app => {
  app.use('/api', apiRoute)
}
