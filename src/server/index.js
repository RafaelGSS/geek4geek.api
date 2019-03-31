import path from 'path'
import { ApolloServer } from 'apollo-server'

// Loaders
import loadResolversByPath from '../utils/loadResolvers'
import schema from '../data/typeDefs'

import { contextFactory } from './context'

// Playground
import { factoryPlaygroundOptions } from './playground'

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

export { serverFactory as default }
