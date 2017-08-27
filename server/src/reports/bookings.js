const moment = require('moment')
const { printer, styles } = require('./pdf')
const repo = require('../repositories')

const numberWithCommas = x => {
  const parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

module.exports = async (req, res, next) => {
  const { ownerId } = req.query
  const bookings = await repo.getBookingsList(ownerId)
  const body = []
  const headers = [
    {
      text: 'ลำดับที่',
      style: 'tableHeader',
      alignment: 'center'
    },
    {
      text: 'ชื่อผู้เช่า',
      style: 'tableHeader',
      alignment: 'center'
    },
    {
      text: 'สถานที่',
      style: 'tableHeader',
      alignment: 'center'
    },
    {
      text: 'ค่าเช่า',
      style: 'tableHeader',
      alignment: 'center'
    },
    {
      text: 'วันที่ชำระเงิน',
      style: 'tableHeader',
      alignment: 'center'
    }
  ]
  body.push(headers)
  let sumTotalPrice = 0
  bookings.forEach((booking, index) => {
    sumTotalPrice += booking.room.price
    body.push([
      {
        text: index + 1,
        alignment: 'center',
        style: 'tableBody'
      },
      {
        text: booking.customer.displayName,
        style: 'tableBody',
        alignment: 'left'
      },
      {
        text: booking.room.address,
        style: 'tableBody',
        alignment: 'left'
      },
      {
        text: numberWithCommas(booking.room.price),
        style: 'tableBody',
        alignment: 'right'
      },
      {
        text: booking.slipDate
          ? moment(booking.slipDate).format('DD/MM/YYYY')
          : 'ไม่ได้ชำระเงิน',
        style: 'tableBody',
        alignment: 'center'
      }
    ])
  })
  body.push([
    {
      text: 'รวม',
      colSpan: 3,
      alignment: 'right',
      fontSize: 18,
      bold: true
    },
    {},
    {},
    {
      text: numberWithCommas(sumTotalPrice),
      alignment: 'right',
      fontSize: 18,
      bold: true
    },
    {}
  ])
  const dd = {
    content: [
      {
        text: 'รายงานรายรับประจำเดือน',
        style: 'header'
      },
      {
        style: 'table',
        table: {
          widths: [40, 150, '*', 100, 100],
          body
        }
      }
    ],
    pageOrientation: 'landscape',
    styles
  }
  const doc = printer.createPdfKitDocument(dd)
  res.setHeader('Content-Type', 'application/pdf')
  doc.pipe(res)
  doc.end()
}
