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
    products ({ id }, args, { db }) {
      return db('category_products_view').where({ id_category: id })
    }
  }
}
