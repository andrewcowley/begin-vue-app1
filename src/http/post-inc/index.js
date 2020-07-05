let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function post (req) {
  await data.set({
    table: 'inc',
    value: 0,
  })
  return {
    statusCode: 200
  }
}