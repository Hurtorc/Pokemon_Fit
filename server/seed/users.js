const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "test",
    // password: "1234",
    password: "$2b$10$qUkQQjfRBbt6B8wfRhwAkOD8kzVLXQx7ZCoqNKY8cvv6sHL5JlIzq",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;