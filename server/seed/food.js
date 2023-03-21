const sequelize = require("../config/index");
const { Food } = require("../models");

const Food_data = [
  {
    user_id: 1,
    calorie: 1200,
    protein: null,
    carbs: null,
    trans_fat: null,
    saturated_fat: null,
    sodium: null,
    sugar: null,
  },
];

const seedFoodData = async () => {
  //await sequelize.sync({ force: true })
  await Food.bulkCreate(Food_data);
};

module.exports = seedFoodData;
