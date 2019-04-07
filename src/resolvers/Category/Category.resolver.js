module.exports = {
  Query: {
    categories (parent, args) {
      return { baseArgs: args }
    }
  },
  Category: {
    products ({ id }, args, { db }) {
      return db('category_products_view').where({ id_category: id })
    }
  }
}
