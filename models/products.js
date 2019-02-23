/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Product =  sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_seller: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'sellers',
        key: 'id'
      }
    },
    id_brand: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'brands',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    unique_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    display_description: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    full_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    seller_custom_field: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_active: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'products'
  });

  Product.associate = (models) => {
    // Product has one Brand
    Product.belongsTo(models.brands, {foreignKey: 'id_brand'})

    // Product has one Seller
    Product.belongsTo(models.sellers, {foreignKey: 'id_seller'})

    // Product has many Categories
    Product.belongsToMany(models.categories, {
      through: models.product_categories,
      foreignKey: 'id_product'
    })

    // Product has many Tags
    Product.belongsToMany(models.tags, {
      through: models.product_tags,
      foreignKey: 'id_product'
    })

    // Product has many Images
    Product.hasMany(models.product_images, {as: 'images', foreignKey: 'id_product'})

    // Product has promotion
    Product.hasOne(models.product_promotion, {as: 'promotion', foreignKey: 'id_product'})
  }
  return Product
};
