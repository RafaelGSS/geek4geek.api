var router = require('express').Router();

router.get('/', function(req, res, next){
    res.send('web done')
});

module.exports = router;