const sequelize = require("../config/index");
const seedUsers = require("./users");
const seedPokemon = require("./pokemon_partner");
const seedProfile = require("./profile");
const seedRewardsList = require("./reward_list");
const seedRewardsEarned = require("./rewards_earned");
const foodSeeds = require("./food");


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPokemon();      
  await seedProfile();
  await foodSeeds();
  // await seedRewardsList();
  // await SeeedRewardsEarned();

  process.exit(0);
};

seedAll();