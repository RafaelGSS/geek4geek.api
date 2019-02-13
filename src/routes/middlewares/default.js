var defaultMiddleware = (req, res, next) => {
    console.log('Default middleware')
    next()
}

module.exports = defaultMiddleware