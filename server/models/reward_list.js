const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config");
const sequelize = require("../config/connection");

class Reward_list extends Model {}

Reward_list.init(
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
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "reward_list",
  }
);

module.exports = Reward_list;
