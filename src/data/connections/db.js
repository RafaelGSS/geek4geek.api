import knex from 'knex'

const factory = (config) => {
    return knex({
        ...config
    })
}

module.exports = factory
