const knexManager = require('./knexQueryManager')

const servicesFactory = () => {
  return {
    knexManager
  }
}

module.exports = { servicesFactory }
