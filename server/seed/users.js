const sequelize = require("../config/index");
const { User } = require("../models");

const userData = [
  {
    username: "test",
    //password: "1234",
    password: "$2b$10$qUkQQjfRBbt6B8wfRhwAkOD8kzVLXQx7ZCoqNKY8cvv6sHL5JlIzq",
  },
];

const seedUsers = () => User.bulkCreate(userData);

//  const seedUsers = async () => {
//   await sequelize.sync({ force: true });

//   await User.bulkCreate(userData);
//   };

module.exports = seedUsers;