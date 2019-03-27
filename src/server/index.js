import { config } from "dotenv";
config();

import { ApolloServer } from "apollo-server"

const serverFactory = async () => {
    const server = new ApolloServer({
        cors: true
    })    
    const port = process.env.PORT || 3000;
    const info = await server.listen({ port })

    return info
}