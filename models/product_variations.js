/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_variations', {
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
    variation_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    variation_value: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'product_variations'
  });
};
