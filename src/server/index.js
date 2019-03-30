import path from "path"

import { ApolloServer } from "apollo-server"

import dbFactory from "../data/connections/db"
import { geek4geek } from "../../config/database"

import schema from "../data/type-defs/schema.graphql"

console.log(schema)
// Loaders
import loadResolversByPath from "../utils/loadResolvers"

const serverFactory = async () => {
    const db = dbFactory(geek4geek)
    const server = new ApolloServer({
        cors: true,
        typeDefs: schema,
        resolvers: loadResolversByPath(path.join(__dirname, "../resolvers")),
        context: {
            db
        }
    })

    const port = process.env.PORT || 3000;
    return await server.listen({ port })
}

export { serverFactory as default }