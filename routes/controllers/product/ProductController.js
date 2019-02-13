var router = require('express').Router();

router.get('/', function(req, res, next){
    res.send('Listing Products')
})

module.exports = router;