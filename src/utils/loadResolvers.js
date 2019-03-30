import path from "path"
import filterFiles from "filter-files"
import isDir from "is-directory"
import { flatten } from "lodash"

const isResolverFile = fileName => /((resolvers)|(resolver))\.js$/.test(fileName);

/**
 * Returns resolvers files from dirname
 * @param {String} dirName 
 * @return {Array<String>}
 */
const getResolversFromPath = dirName => {
    return filterFiles.sync(dirName, (fp, dir, files, recurse) => {
        if (isResolverFile(fp)) {
            return true;
        }

        return isDir.sync(path.join(dir, fp));
    }, true);
}

/**
 * Load by "require" resolvers file from dirname
 * @param {String} dirname 
 */
const loadResolversByPath = dirname => {
    const resolvers = getResolversFromPath(dirname).map(require)

    return flatten(resolvers)
}

module.exports = loadResolversByPath