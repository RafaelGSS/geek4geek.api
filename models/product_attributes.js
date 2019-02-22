/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_attributes', {
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
    attribute_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    attribute_value: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'product_attributes'
  });
};
