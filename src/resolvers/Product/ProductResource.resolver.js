/* eslint-disable camelcase */
const { get } = require('lodash')

module.exports = {
  ProductsResource: {
    pagination: (parent, args, { cfg }) => {
      const { page, per_page } = get(parent, 'baseArgs.pagination', cfg.PAGINATION_RESOURCE_DEFAULT)

      return {
        per_page: per_page,
        current_page: page,
        total_pages: 1,
        total_records: 1
      }
    },
    records: (parent, args, { db, knexPaginator, cfg }) => {
      const { page, per_page } = get(parent, 'baseArgs.pagination', cfg.PAGINATION_RESOURCE_DEFAULT)

      const knex = knexPaginator(per_page, page, db.table('products'))
      return knex.select('*').then(products => products)
    }
  }
}
