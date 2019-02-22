var models = require('../models')

exports.product_list = (req, res, next) => {
    models.brands.all().then(brands => {
        console.log(brands)
    })
    res.send('Listing Products')
}
