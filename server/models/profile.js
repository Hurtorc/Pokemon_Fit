const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config");
const sequelize = require("../config");

class Profile extends Model {}

Profile.init(
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
      defaultValue: 1,
      references: {
        model: "pokemon_partner",
        key: "id",
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      calorie_goal: {
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
        allowNull: true,
        validate: {
          len: [1],
        },
      },
      streak: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          len: [1],
        },
      },
      diet_type: {
        type: DataTypes.STRING,
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
    modelName: "profile",
  }
);

module.exports = Profile;
