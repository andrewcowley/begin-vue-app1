let data = require('@begin/data')

exports.handler = async function post (req) {
  await data.set({
    table: 'inc',
    key: 'pulses',
    value: 0,
  })
  return {
    statusCode: 200
  }
}