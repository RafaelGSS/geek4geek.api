import Product from './Product/Product.graphql'
import resources from './resources.graphql'
import Query from './Query.graphql'

module.exports = [
  Product,
  resources,
  Query
].join('\n')
