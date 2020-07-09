let data = require('@begin/data')

exports.handler = async function post (req) {
  let table= 'inc';
  let key= 'pulses';
  let value= 0;
  await data.set({table, key, value})
  return {
    statusCode: 200
  }
}