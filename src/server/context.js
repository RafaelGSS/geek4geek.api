const dbFactory = require('../data/connections/db')
const { geek4geek } = require('../../config/database')
const graphqlQueryCompress = require('graphql-query-compress')

const debugRequest = req => {
  let query

  try {
    query = graphqlQueryCompress(req.body.query)
  } catch (e) {
    console.warn(e)
  }

  console.log('Request: %s \n -> %s \n', new Date(), query)
}

const contextFactory = config => {
  const db = dbFactory(geek4geek)

  return ({ req }) => {
    // just log received query
    debugRequest(req)

    const context = { db }

    return context
  }
}

module.exports = { contextFactory }
