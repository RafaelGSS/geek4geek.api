'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    display_name: DataTypes.STRING
  }, {
    underscored: true,
  });
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};