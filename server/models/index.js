// import models
const User = require("./user");
const Pokemon_partner = require("./pokemon_partner");
const Food = require("./food");
const Reward_list = require("./reward_list");
const Reward_earned = require("./rewards_earned");
const Profile = require("./profile");

// // Products belongsTo Category
// Product.belongsTo(Category, {
//   foreignKey: 'category_id',
// });

// // Categories have many Products
// Category.hasMany(Product, {
//   foreignKey: 'category_id',
// });

// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: ProductTag,
//   foreignKey: 'product_id',
// });

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   foreignKey: 'tag_id',
// });

Profile.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasOne(Profile, {
  foreignKey: "user_id",
});

Reward_earned.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Reward_earned, {
  foreignKey: "user_id",
});

Reward_earned.belongsTo(Reward_list, {
  foreignKey: "reward",
});

Reward_list.hasMany(Reward_earned, {
  foreignKey: "reward",
});

Food.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Food, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Pokemon_partner,
  Food,
  Reward_earned,
  Reward_list,
  Profile,
};
