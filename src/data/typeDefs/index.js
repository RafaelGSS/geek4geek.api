import Product from './Product/Product.gql'
import resources from './resources.gql'
import Query from './Query.gql'

module.exports = [
  Product,
  resources,
  Query
].join('\n')
