const { importSchema } = require('graphql-import')
const typeDefs = importSchema('./src/data/typeDefs/schema.graphql')

module.exports = typeDefs
