module.exports = {
  Query: {
    products (parent, args, { db }, info) {
      return { base_args: args }
    }
  }
}
