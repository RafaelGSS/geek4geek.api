var router = require('express').Router();

router.use('/product', require('./products'))
router.use('/category', require('./categories'))

module.exports = router;