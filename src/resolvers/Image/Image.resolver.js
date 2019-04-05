/* eslint-disable camelcase */
module.exports = {
  Image: {
    product ({ id_product }, args, { db }, info) {
      return db('products').where({ id: id_product }).first()
    }
  }
}
