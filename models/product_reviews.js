/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_reviews', {
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
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    review: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    review_star: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '5'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'product_reviews'
  });
};
