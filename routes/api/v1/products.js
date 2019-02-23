var router = require('express').Router()

const productController = require('../../../controllers/ProductController')

router.get('/', productController.list)
router.get('/unique/:unique', productController.findByUnique)

module.exports = router;