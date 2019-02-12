var router = require('express').Router();

router.get('/', function(req, res, next){
    res.send('api v1 ok')
})

module.exports = router;