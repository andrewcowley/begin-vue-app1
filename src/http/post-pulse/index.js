let data = require('@begin/data')

exports.handler = async function http (req) {
  let table= 'inc';
  let key= 'pulses';
  await data.incr({table, key, prop: 'value' })
  return {
    statusCode: 200
  }
}
