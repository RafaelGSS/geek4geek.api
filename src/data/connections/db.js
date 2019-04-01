const knex = require('knex')

const factory = (config) => {
  return knex({
    ...config
  })
}

module.exports = factory
