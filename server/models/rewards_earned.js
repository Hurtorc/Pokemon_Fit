const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config");
const sequelize = require("../config");

class Reward_earned extends Model {}

Reward_earned.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    reward: {
      type: DataTypes.INTEGER,
      references: {
        model: "reward_list",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "reward_earned",
  }
);

module.exports = Reward_earned;
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Reward_earned extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        },
    },
      reward: {
        type: DataTypes.INTEGER,
            references: {
            model: "reward_list",
            key: "id",
        },
    },
},
{
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: "post",
}
);

module.exports = Post;
