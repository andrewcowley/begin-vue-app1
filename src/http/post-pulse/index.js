let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function post (req) {
 
  let table = 'inc';
  let key = 'the_value';

  await data.incr({table, key, prop: 'pulses'})
  return {
    statusCode: 200
  }
}
