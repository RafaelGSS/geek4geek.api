/* eslint-disable camelcase */
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
    promo ({ id }, args, { db }) {
      return db('product_promotion').where({ id_product: id, is_active: true }).orderBy('created_at', 'desc').first()
    },
    promotions ({ id }, args, { db }) {
      return db('product_promotion').where({ id_product: id })
    },
    reviews ({ id }, args, { db }) {
      return db('product_reviews').where({ id_product: id })
    },
    tags ({ id }, args, { db }) {
      return db('product_tags_view').where({ id_product: id })
    },
    variations ({ id }, args, { db }) {
      return db('product_variations').where({ id_product: id })
    },
    attributes ({ id }, args, { db }) {
      return db('product_attributes').where({ id_product: id })
    },
    brand ({ id_brand }, args, { db }) {
      return db('brands').where({ id: id_brand }).first()
    },
    seller ({ id_seller }, args, { db }) {
      return db('sellers').where({ id: id_seller }).first()
    }
  }
}
