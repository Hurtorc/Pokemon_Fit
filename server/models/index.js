// import models
const User = require('./user');
const User_profile = require('./user_profile');
const Pokemon_partner = require('./pokemon_partner');
const Food = require('./food');
const Reward_earned = require('./reward_earned');
const Reward_list = require('./reward_list');

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

module.exports = {
    User,
    User_profile,
    Pokemon_partner,
    Food,
    Reward_earned,
    Reward_list,
};