const sequelize = require("../config/index");
const { Reward_earned } = require("../models");

const Rewards_earned_data = [
  {
    id: 1,
    user_id: 1,
    reward: "Badge",
  },
];

const seedRewardsEarned = async () => await Reward_earned.create(Rewards_earned_data);

module.exports = seedRewardsEarned;
