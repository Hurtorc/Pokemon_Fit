const { Rewards_earned } = require("../models");

const Rewards_earned_data = [
  {
    id: 1,
    user_id: 1,
    reward: Badge,
  },
];

const seedRewardsEarned = () => Rewards_earned.bulkCreate(Rewards_earned_data);

module.exports = seedRewardsEarned;
