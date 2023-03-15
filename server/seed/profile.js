const { Profile } = require("../models");

const User_profile_data = [
  {
    id: 1,
    user_id: 1,
    pokemon_partner: null,
    DOB: 1990,
    height: 5,
    weight: 150,
    streak: null,
    gender: male,
    diet_type: vegetarian,
  },
];

const seedProfile = () => Profile.bulkCreate(User_profile_data);

module.exports = seedProfile;
