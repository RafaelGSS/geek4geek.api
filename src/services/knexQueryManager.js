/**
 * Make order by array of string
 * @param {Array} orders
 * @param {knex} queryKnexInstance
 */
const orderByFromArray = (orders, queryKnexInstance) => {
  orders.forEach(order => {
    queryKnexInstance = orderBy(order, queryKnexInstance)
  })
  return queryKnexInstance
}

/**
 * Make order by string
 * @param {String} order
 * @param {knex} queryKnexInstance
 */
const orderBy = (order, queryKnexInstance) => {
  const [field, value] = order.split('_')
  queryKnexInstance.orderBy(field, value)

  return queryKnexInstance
}

/**
 * @param {int} perPage
 * @param {int} currentPage
 * @param {knex} queryKnexInstance
 */
const pagination = (perPage, currentPage, queryKnexInstance) => {
  queryKnexInstance.limit(perPage).offset(perPage * (currentPage - 1))

  return queryKnexInstance
}

module.exports = {
  orderBy,
  orderByFromArray,
  pagination
}
