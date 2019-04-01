const loadResolver = require('../src/utils/loadResolvers')
const { isEmpty, isFunction } = require('lodash')
const path = require('path')

test('Test autoload resolvers', () => {
  expect(
    isFunction(loadResolver)
  ).toBe(true)
  
  expect(
    isEmpty(loadResolver(path.join(__dirname, 'utils/resolvers')))
  ).toBe(false);
})
