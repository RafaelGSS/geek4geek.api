var router = require('express').Router();

router.get('/', function(req, res, next){
    res.send('api v1 ok')
})

const controllersPath = './../../controllers'

const productController = controllersPath + '/product/ProductController'
router.use('/product', require(productController))

module.exports = router;