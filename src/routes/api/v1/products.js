var router = require('express').Router();

var product_controller = require('../../../controllers/ProductController')

router.get('/', product_controller.product_list)

module.exports = router;