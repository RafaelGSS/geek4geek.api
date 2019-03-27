const path = require("path");
const filterFiles = require("filter-files");
const isDir = require("is-directory");
const { flatten } = require("lodash");
const isGraphFile = fileName => /((routes)|(route))\.js$/.test(fileName);

/**
 * @method getGraphFilesFromDirname
 * @param  {String}            dirName
 * @return {Array<String>}
 */
const getGraphFilesFromDirname = dirName => {
  return filterFiles.sync(dirName, (fp, dir, files, recurse) => {
    if (isGraphFile(fp)) {
      return true;
    }

    return isDir.sync(path.join(dir, fp));
  }, true);
};

/**
 * @method loadGraphByPath
 * @param  {String}           dirName
 * @return {Array<Function>}   array of routes
 */
const loadGraphByPath = dirName => {
  const routes = getGraphFilesFromDirname(dirName)
    .map(require);

  return flatten(routes);
};

module.exports = loadGraphByPath;

