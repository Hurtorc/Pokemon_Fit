const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Profile extends Model {}

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
      pokemon_partner: {
        type: DataTypes.INTEGER,
        references: {
          model: "pokemon",
          key: "id",
    },
    DOB: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    streak: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    diet_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1],
        },
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
