module.exports = {
  Query: {
    products (parent, args) {
      return { baseArgs: args }
    }
  }
}
