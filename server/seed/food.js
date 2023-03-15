const { Food } = require("../models");

const Food_data = [
  {
    id: 1,
    user_id: 1,
    calorie: 100,
    protein: null,
    carbs: null,
    trans_fat: null,
    saturated_fat: null,
    sodium: null,
    sugar: null,
  },
];

const seedFoodData = () => Food.bulkCreate(Food_data);

module.exports = seedFoodData;
