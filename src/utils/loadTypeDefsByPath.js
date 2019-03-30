// import path from "path"
// import filterFiles from "filter-files"
// import isDir from "is-directory"
// import { flatten } from "lodash"

const isGraphQLFile = fileName => /.((graphql)|(gql))$/.test(fileName);


module.exports = isGraphQLFile