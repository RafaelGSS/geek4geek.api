/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sellers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    seller_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    percentage_item: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'sellers'
  });
};
