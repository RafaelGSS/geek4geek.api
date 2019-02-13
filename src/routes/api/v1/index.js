var router = require('express').Router();

router.use('/product', require('./products'))

module.exports = router;