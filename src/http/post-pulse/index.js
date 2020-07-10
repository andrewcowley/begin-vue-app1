let data = require('@begin/data')

exports.handler = async function http (req) {
  console.log('pulse post')
  let table= 'inc';
  let key= 'pulses';
  await data.incr({table, key, prop: 'noPulses' })
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'post pulse'
    })
  }
}
