let data = require('@begin/data')

exports.handler = async function http() {

    let table = 'greetings'
    let greetings = [
      { table, key: 'Māori', greeting: `Kia ora` },
      { table, key: 'Swahili', greeting: `Hujambo` },
      { table, key: 'Japanese', greeting: `Kon'nichiwa` } ]
    await data.set(greetings)
  
}