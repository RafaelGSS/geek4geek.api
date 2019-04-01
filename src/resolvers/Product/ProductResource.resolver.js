module.exports = {
  ProductsResource: {
    pagination: (parent, args, { db }, info) => {
      return {
        per_page: 1,
        current_page: 1,
        total_pages: 1,
        total_records: 1
      }
    },
    records: (parent, args, { db }, info) => {
      return db.select('*').from('products')
        .then(products => products)
    }
  }
}
