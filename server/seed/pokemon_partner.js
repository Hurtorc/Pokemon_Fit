const { Pokemon_partner } = require("../models");

const Pokemon_partner_data = [
  {
    name: "Ditto",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png)",
    gif: null,
    evolution: null,
    legendary: false,
  },
  {
    name: "Charizard",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png)",
    gif: null,
    evolution: null,
    legendary: false,
  },
  {
    name: "Charmeleon",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png)",
    gif: null,
    evolution: 2,
    legendary: false,
  },
  {
    name: "Charmander",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png)",
    gif: null,
    evolution: 3,
    legendary: false,
  },
];

const seedPokemonPartner = () => Pokemon_partner.bulkCreate(Pokemon_partner_data);

module.exports = seedPokemonPartner;
