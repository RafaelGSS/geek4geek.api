const path = require('path')
const filterFiles = require('filter-files')
const isDir = require('is-directory')
const { omitBy, isEmpty, defaultsDeep } = require('lodash')

const isResolverFile = fileName => /((resolvers)|(resolver))\.js$/.test(fileName)

/**
 * Returns resolvers files from dirname
 * @param {String} dirName
 * @return {Array<String>}
 */
const getResolversFromPath = dirName => {
  return filterFiles.sync(dirName, (fp, dir, files, recurse) => {
    if (isResolverFile(fp)) {
      return true
    }

    return isDir.sync(path.join(dir, fp))
  }, true)
}

/**
 * Load by "require" resolvers file from dirname
 * @param {String} dirname
 */
const loadResolversByPath = dirname => {
  const resolvers = getResolversFromPath(dirname)
    .map(require)
    .reduce((previous, current) => defaultsDeep(current, previous), {})
  return omitBy(resolvers, isEmpty)
}

module.exports = loadResolversByPath
