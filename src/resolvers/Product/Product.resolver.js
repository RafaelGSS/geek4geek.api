module.exports = {
  Query: {
    products (parent, args, ctx, info) {
      return {
        pagination: {
          per_page: 1,
          current_page: 1,
          total_pages: 1,
          total_records: 1
        },
        records: [
          {
            id: 11,
            name: 'Teste',
            unique_name: 'teste-name'
          }
        ]
      }
    }
  }
}
