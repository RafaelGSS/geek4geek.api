/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const ProductImages = sequelize.define('product_images', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_product: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    display_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    low_display_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    big_display_image: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    alt: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'product_images'
  });

  ProductImages.associate = (models) => {
    // Image has one product
    ProductImages.belongsTo(models.products, {as: 'images', foreignKey: 'id_product'})
  } 

  return ProductImages
};
