/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_categories', {
    id_product: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    id_category: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    tableName: 'product_categories'
  });
};
