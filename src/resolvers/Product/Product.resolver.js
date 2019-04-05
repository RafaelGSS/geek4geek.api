module.exports = {
  Query: {
    // Returns ProductResource
    products (parent, args) {
      return { baseArgs: args }
    }
  },
  Product: {
    images (parent, args, context, info) {
      console.log(parent)
      return [{
        id: 21321,
        display_image: '',
        low_display_image: 'String',
        big_display_image: 'String',
        alt: 'String'
      }]
    }
  }
}
