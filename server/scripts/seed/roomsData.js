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
