var models = require('../models')

/**
 * Return minimal list of Products
 */
exports.list = (req, res, next) => {
    models.products.findAll({
        include: [
            { model: models.brands },
            { model: models.sellers },
            { model: models.categories, attributes: ['category_name'], through: { attributes: [] } },
            { model: models.tags },
            { model: models.product_images, as: 'images', attributes: ['display_image', 'low_display_image', 'big_display_image', 'alt'] },
            { model: models.product_promotion, as: 'promotion', attributes: ['promotion_percentage'] }
        ]
    }).then(product => {
        res.json(product)
    })
}

/**
 * Return complete info about Product(Unique)
 */
exports.findByUnique = (req, res, next) => {
    const unique = req.params.unique
    models.products.findOne({
        include: [
            { model: models.brands, attributes: ['brand_name'], raw: true },
            { model: models.sellers, attributes: ['seller_name'] },
            { model: models.categories, attributes: ['category_name'], through: { attributes: [] } },
            { model: models.tags, attributes: ['tag_name'], through: { attributes: [] } },
            { model: models.product_images, as: 'images', attributes: ['display_image', 'low_display_image', 'big_display_image', 'alt'] },
            { model: models.product_promotion, as: 'promotion', attributes: ['promotion_percentage'] },
        ],
        attributes: {
            exclude: ['id', 'created_at', 'updated_at', 'is_active']
        },
        where: { unique_name: unique, is_active: true }
    }).then(product => {
        product.dataValues.promo = product.promotion != null
        res.json(product)
    })
}