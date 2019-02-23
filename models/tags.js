/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Tag = sequelize.define('tags', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING(45),
      allowNull: false
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
    tableName: 'tags'
  });
  
  Tag.associate = (models) => {
    Tag.belongsToMany(models.products, {
      through: models.product_tags,
      foreignKey: 'id_tag'
    });
  }

  return Tag
};
