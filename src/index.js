const serverFactory = require('./server')

serverFactory()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
  .catch(e => {
    console.error('⛔', [e, e.message])
  })
