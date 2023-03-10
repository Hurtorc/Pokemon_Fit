const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class food extends Model {}

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
      calorie: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    protein: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            len: [1],
        },
    },
    carbs: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            len: [1],
        },
    },
    trans_fat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            len: [1],
        },
    },
    saturated_fat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            len: [1],
        },
    },
    sodium: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            len: [1],
        },
    },
    sugar: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    modelName: "post",
  }
);

module.exports = Post;
