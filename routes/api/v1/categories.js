var router = require('express').Router()

var categoryController = require('../../../controllers/CategoryController')

router.get('/', categoryController.list)
router.get('/:id', categoryController.find)

module.exports = router;