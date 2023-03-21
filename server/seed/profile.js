const { Profile } = require("../models");

const profileData = [
  {
    user_id: 1,
    first_name: "John",
    last_name: "Doe",
    dob: "12/12/1990",
    height: 5,
    weight: 150,
    gender: "male",
    calorie_goal: 1200,
    diet_type: "vegetarian",
  },
];

const seedProfile = () => Profile.bulkCreate(profileData);

// const seedProfile = async () => {
//   await sequelize.sync({ force: true })
//   await Profile.create(Profile_data[0]);
// };

module.exports = seedProfile;
