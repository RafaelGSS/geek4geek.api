const { knexPaginator } = require('./pagination')

const servicesFactory = () => {
  return {
    knexPaginator
  }
}

module.exports = { servicesFactory }
