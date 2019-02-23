/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const ProductPromotion = sequelize.define('product_promotion', {
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
      },
      unique: true
    },
    promotion_percentage: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'product_promotion'
  });
  
  ProductPromotion.associate = (models) => {
    // Promotion has one Product
    ProductPromotion.belongsTo(models.products, {as: 'promotion', foreignKey: 'id_product'})
  }

  return ProductPromotion
};
