var models = require('../models')

/**
 * Return a list of categories
 */
exports.list = (req, res, next) => {
    models.categories.findAll({
    }).then(categories => {
        res.json(categories)
    })  
}

/**
 * Return category by ID
 */
exports.find = (req, res, next) => {
    const id = req.params.id
    models.categories.findById(id).then(category => {
        res.json(category)
    })
}
