module.exports = {
  Query: {
    categories (parent, args) {
      return { baseArgs: args }
    },
    category (parent, { query }, { db }) {
      return db('categories').where(query).first()
    }
  },
  Category: {
    products ({ id }, { query }, { db, knexManager }) {
      let knex = knexManager.where({ id_category: id }, db('category_products_view'))
      if (query) {
        // Parser deep
        const parsed = query.reduce((acm, current) => {
          const obj = acm
          Object.keys(current).forEach(k => {
            if (k in obj) {
              obj[k].push(current[k])
            } else {
              obj[k] = [current[k]]
            }
          })
          return obj
        }, {})

        // Create WhereIn
        Object.keys(parsed).forEach(k => {
          knex = knex.whereIn(k, parsed[k])
        })
        console.log(knex)
      }

      return knex.select('*').then(products => products)
    }
  }
}
