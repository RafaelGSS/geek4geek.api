/* eslint-disable camelcase */
const { get } = require('lodash')

module.exports = {
  CategoriesResource: {
    pagination: (parent, args, { db, cfg }) => {
      const { page, per_page } = get(parent, 'baseArgs.pagination', cfg.PAGINATION_RESOURCE_DEFAULT)

      return db.table('categories').count('id as total_records').first()
        .then(({ total_records }) => {
          return {
            per_page: per_page,
            current_page: page,
            total_records: total_records,
            total_pages: total_records / per_page
          }
        })
    },
    records: (parent, args, { db, knexPaginator, cfg }) => {
      const { page, per_page } = get(parent, 'baseArgs.pagination', cfg.PAGINATION_RESOURCE_DEFAULT)

      const knex = knexPaginator(per_page, page, db.table('categories'))
      return knex.select('*').then(categories => categories)
    }
  }
}
