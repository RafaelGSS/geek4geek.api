import dbFactory from '../data/connections/db'
import { geek4geek } from '../../config/database'
import graphqlQueryCompress from 'graphql-query-compress'

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
