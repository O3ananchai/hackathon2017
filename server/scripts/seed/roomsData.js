// const faker = require('faker')
// const _ = require('lodash')

const owners = require('./ownersData')

const rooms = [
  {
    owner: owners[0]._id,
    address:
      '22 ถนน พระรามที่ 3 แขวง ช่องนนทรี เขต ยานนาวา กรุงเทพมหานคร 10120 ',
    width: 30.0,
    long: 35.0,
    price: 3000,
    pledge: 3,
    status: 0,
    geomtry: {
      type: 'Point',
      coordinates: [100.54342, 13.703029]
    }
  },
  {
    owner: owners[1]._id,
    address:
      '71/1 ซ.สุขสะอาด ถนน สุขสวัสดิ์ แขวง บางปะกอก เขต ราษฎร์บูรณะ กรุงเทพมหานคร 10140',
    width: 33.0,
    long: 35.0,
    price: 4500,
    pledge: 3,
    status: 0,
    geomtry: {
      type: 'Point',
      coordinates: [100.48718, 13.686542]
    }
  },
  {
    owner: owners[2]._id,
    address: '333 หมู่ 3 ตำบล ศาลายา อำเภอ พุทธมณฑล นครปฐม 73170',
    width: 20.0,
    long: 25.5,
    price: 2500,
    pledge: 2,
    status: 0,
    geomtry: {
      type: 'Point',
      coordinates: [100.308942, 13.821888]
    }
  },
  {
    owner: owners[3]._id,
    address: '35 หมู่ 3 ตำบล ศาลายา อำเภอ พุทธมณฑล นครปฐม 73170',
    width: 30.0,
    long: 35.0,
    price: 3200,
    pledge: 3,
    status: 0,
    geomtry: {
      type: 'Point',
      coordinates: [100.309508, 13.824114]
    }
  },
  {
    owner: owners[4]._id,
    address: '191 หมู่ 3 ตำบล ศาลายา อำเภอ พุทธมณฑล นครปฐม 73170',
    width: 30.0,
    long: 35.0,
    price: 3000,
    pledge: 3,
    status: 0,
    geomtry: {
      type: 'Point',
      coordinates: [100.308971, 13.817619]
    }
  },
  {
    owner: owners[4]._id,
    address: '200 หมู่ 2 ตำบล ศาลายา อำเภอ พุทธมณฑล นครปฐม 73170',
    width: 30.5,
    long: 35.0,
    price: 3200,
    pledge: 3,
    status: 0,
    geomtry: {
      type: 'Point',
      coordinates: [13.826959, 100.3107]
    }
  },
  {
    owner: owners[4]._id,
    address: '20/33 หมู่ 2 ตำบล ศาลายา อำเภอ พุทธมณฑล นครปฐม 73170',
    width: 30.5,
    long: 35.0,
    price: 3200,
    pledge: 3,
    status: 0,
    geomtry: {
      type: 'Point',
      coordinates: [13.822147, 100.310259]
    }
  },
  {
    owner: owners[4]._id,
    address: '20/50 หมู่ 2 ตำบล ศาลายา อำเภอ พุทธมณฑล นครปฐม 73170',
    width: 30.5,
    long: 35.0,
    price: 3200,
    pledge: 3,
    status: 0,
    geomtry: {
      type: 'Point',
      coordinates: [13.822741, 100.310592]
    }
  },
  {
    owner: owners[4]._id,
    address: '21 หมู่ 2 ตำบล ศาลายา อำเภอ พุทธมณฑล นครปฐม 73170',
    width: 30.5,
    long: 35.0,
    price: 3200,
    pledge: 3,
    status: 0,
    geomtry: {
      type: 'Point',
      coordinates: [13.821626, 100.309712]
    }
  },
  {
    owner: owners[4]._id,
    address: '22 หมู่ 2 ตำบล ศาลายา อำเภอ พุทธมณฑล นครปฐม 73170',
    width: 30.5,
    long: 35.0,
    price: 3200,
    pledge: 3,
    status: 0,
    geomtry: {
      type: 'Point',
      coordinates: [13.821731, 100.309071]
    }
  }
]

// _.times(10, () => {
//   rooms.push({
//     owner: owners[_.random(owners.length - 1)]._id,
//     address: faker.address.country(),
//     width: _.random(3, 5),
//     long: _.random(5, 8),
//     price: _.random(500, 12000),
//     pledge: _.random(2, 5),
//     status: 0
//   })
// })

module.exports = rooms
