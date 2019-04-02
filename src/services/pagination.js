const knexPaginator = (perPage, currentPage, queryKnexInstance) => {
  queryKnexInstance.limit(perPage).offset(perPage * (currentPage - 1))

  return queryKnexInstance
}

module.exports = { knexPaginator }
