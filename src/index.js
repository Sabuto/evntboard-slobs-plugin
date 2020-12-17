const plugin = require('./plugin')
const schema =  require('./schema')
const config =  require('./config')

module.exports = {
  id: 'slobs',
  name: 'SLOBS for EvntBoard',
  description: 'SLOBS for EvntBoard',
  plugin,
  schema,
  config
}
