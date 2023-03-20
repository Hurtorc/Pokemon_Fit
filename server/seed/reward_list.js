//future production. Rewarding badges based on progress.

const { Reward_list } = require("../models");

const Reward_list_data = [
  {
    id: 1,
    name: Badge,
  },
];

const seedRewards = () => Reward_list.bulkCreate(Reward_list_data);

module.exports = seedRewards;
