let data = require('@begin/data')

exports.handler = async function post (req) {
 
  let table = 'inc';
  let key = 'pulses';

  await data.incr({table, key, prop: 'value' })
  return {
    statusCode: 200
  }
}
