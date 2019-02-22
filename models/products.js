/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
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
};
