let data = require('@begin/data')

// exports.handler = async function http (req) {
//   let table = 'inc';
//   let key = 'pulses';
//   let doc = await data.get({table, key})
//   return {
//     statusCode: 201,
//     headers: {
//       'content-type': 'application/json; charset=utf8',
//       'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
//     },
//     body: JSON.stringify({
//       doc
//     })
//   }
// }
exports.handler = async function http (req) {
  console.log('Begin API called')
  let table = await data.get({
    table: 'inc'
  })
  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      message: table
    })
  }
}
