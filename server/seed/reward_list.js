//future production. Rewarding badges based on progress.
const sequelize = require("../config/index");
const { Reward_list } = require("../models");

const Reward_list_data = [
  {
    id: 1,
    name: "Badge",
  },
];

const seedRewardsList = async () => {
  //await sequelize.sync({ force: true })
  await Reward_list.bulkCreate(Reward_list_data);
};

module.exports = seedRewardsList;
