const sequelize = require("../config/index");

const foodSeeds = require("./food");
const PokemonPartnerSeeds = require("./pokemon_partner");
const seedUsers = require("./users");
const profileSeeds = require("./profile");
const RewardListSeeds = require("./reward_list");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await PokemonPartnerSeeds();
  await profileSeeds();
  await foodSeeds();
  //   await RewardListSeeds();

  process.exit(0);
};

seedAll();
