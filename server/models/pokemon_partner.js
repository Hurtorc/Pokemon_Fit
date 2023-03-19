const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Pokemon_partner extends Model {}

Pokemon_partner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    gif: {
      type: DataTypes.STRING,
      allowNull: true,//future change to false and require gif
      validate: {
        len: [1],
      },
    },
    evolution: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "pokemon_partner",
        key: "id",
      },
    },
    legendary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "pokemon_partner",
  }
);

module.exports = Pokemon_partner;
