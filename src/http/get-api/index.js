let data = require('@begin/data')

exports.handler = async function http() {
  let table = 'water_meter'
  let key = `m1` 
  let pulses = 450
  await data.set({table, key, pulses})
  // Increment
  await data.incr({table, key, prop: 'pulses'})
}