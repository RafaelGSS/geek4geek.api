import path from "path"

import { ApolloServer } from "apollo-server"

import dbFactory from "../data/connections/db"
import { geek4geek } from "../../config/database"

const typeDefs = `
type Query {
    products(pagination: PaginationInput) : ProductsResource!
    users: Int!
}

type Product implements IRecord {
    id: ID!
    name: String!
    unique_name: String!
}

type ProductsResource implements IResource {
    pagination: Pagination!
    records: [Product]!
}

interface IResource {
    pagination: Pagination!
    records: [IRecord]!
}

interface IRecord {
    id: ID!
}

type Pagination {
    per_page: Int!
    current_page: Int!
    total_pages: Int!
    total_records: Int!
}

input PaginationInput {
    page: Int
    per_page: Int
}
`


// Loaders
import loadResolversByPath from "../utils/loadResolvers"

const serverFactory = async () => {
    const db = dbFactory(geek4geek)
    const server = new ApolloServer({
        cors: true,
        typeDefs,
        resolvers: loadResolversByPath(path.join(__dirname, "../resolvers")),
        context: {
            db
        }
    })

    const port = process.env.PORT || 3000;
    return await server.listen({ port })
}

export { serverFactory as default }