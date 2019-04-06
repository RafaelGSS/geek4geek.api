const dbFactory = require('../data/connections/db')
const { geek4geek } = require('../../config/database')
const graphqlQueryCompress = require('graphql-query-compress')
const { servicesFactory } = require('../services')
const cfg = require('../config/defaults')

/**
 * @param req
 */
const debugRequest = req => {
  let query

  try {
    query = graphqlQueryCompress(req.body.query)
  } catch (e) {
    console.warn(e)
  }

  console.log('Request: %s \n -> %s \n', new Date(), query)
}

/**
 * @param {process.env} config
 */
const contextFactory = config => {
  const db = dbFactory(geek4geek)

  return ({ req }) => {
    // just log received query
    debugRequest(req)

    const context = { db, ...servicesFactory(), cfg }

    return context
  }
}

module.exports = { contextFactory }
