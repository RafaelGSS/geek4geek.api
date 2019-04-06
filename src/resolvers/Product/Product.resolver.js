module.exports = {
  Query: {
    // Returns ProductResource
    products (parent, args) {
      return { baseArgs: args }
    }
  },
  Product: {
    images ({ id }, args, { db }) {
      return db('product_images').where({ id_product: id })
    },
    categories ({ id }, args, { db }) {
      return db('product_categories_view').where({ id_product: id })
    },
    promotions ({ id }, args, { db }) {
      return db('product_promotion').where({ id_product: id })
    },
    reviews ({ id }, args, { db }) {
      return db('product_reviews').where({ id_product: id })
    },
    tags ({ id }, args, { db }) {
      return db('product_tags_view').where({ id_product: id })
    }
  }
}
