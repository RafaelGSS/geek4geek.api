var router = require('express').Router();

router.use(require('./web'));
router.use('/api/v1', require('./api/v1'));

module.exports = router;