/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brands', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brand_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'brands'
  });
};
