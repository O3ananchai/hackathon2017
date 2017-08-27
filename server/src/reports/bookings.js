const { printer, styles } = require('./pdf')

module.exports = async (req, res, next) => {
  const dd = {
    content: [
      {
        text: 'Test'
      }
    ],
    styles
  }
  const doc = printer.createPdfKitDocument(dd)
  res.setHeader('Content-Type', 'application/pdf')
  doc.pipe(res)
  doc.end()
}
