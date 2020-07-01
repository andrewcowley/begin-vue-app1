let data = require('@begin/data')

exports.handler = async function http (req) {
  let table = `count`
  await data.set({table, 'key':0})
}
