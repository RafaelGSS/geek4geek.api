const path = require('path')
const { ApolloServer } = require('apollo-server')

// Loaders
const loadResolversByPath = require('../utils/loadResolvers')
const schema = require('../data/typeDefs')

const { contextFactory } = require('./context')

// Playground
const { factoryPlaygroundOptions } = require('./playground')

const serverFactory = async () => {
  const isProduction = process.env.NODE_ENV === 'production'

  const server = new ApolloServer({
    cors: true,
    typeDefs: schema,
    resolvers: loadResolversByPath(path.join(__dirname, '../resolvers')),
    context: contextFactory(process.env),
    playground: factoryPlaygroundOptions(process.env),
    tracing: !isProduction,
    introspection: !isProduction
  })

  const port = process.env.PORT || 3000
  return server.listen({ port })
}

module.exports = serverFactory
