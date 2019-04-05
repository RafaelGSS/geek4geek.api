module.exports = {
  Query: {
    // Returns ProductResource
    products (parent, args) {
      return { baseArgs: args }
    }
  },
  Product: {
    images ({ id }, args, { db }, info) {
      return db('product_images').where({ id_product: id })
    }
  }
}
