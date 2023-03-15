const { Pokemon_partner } = require("../models");

const Pokemon_partner_data = [
  {
    id: 1,
    name: Name,
   pic: Pic,
    gif: Gif,
    height: 5,
    weight: 150,
    streak: null,
    gender: male,
    diet_type: vegetarian,
  },
];

const seedPokemonPartner = () => Pokemon_partner.bulkCreate(Pokemon_partner_data);

module.exports = seedPokemonPartner;
