var models = require('../models')

exports.list = (req, res, next) => {
    models.products.findAll({
        include: [
            models.brands,
            models.sellers, 
            models.categories,
            models.tags,
            { model: models.product_images, as: 'images' },
            { model: models.product_promotion, as: 'promotion' }
        ]
    }).then(product => {
        res.json(product)
    })  
}

exports.findByUnique = (req, res, next) => {
    const unique = req.params.unique
    models.products.findOne({
        where: {unique_name: unique},
        include: [models.brands, models.sellers]
    }).then(product => {
        res.json(product)    
    })
}