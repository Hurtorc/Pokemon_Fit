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
  {
    name: "Venusaur",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png)",
    gif: null,
    evolution: null,
    legendary: false,
  },
  {
    name: "Ivysaur",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png)",
    gif: null,
    evolution: 5,
    legendary: false,
  },
  {
    name: "Bulbasaur",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png)",
    gif: null,
    evolution: 6,
    legendary: false,
  },
  {
    name: "Machamp",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png)",
    gif: null,
    evolution: null,
    legendary: false,
  },
  {
    name: "Machoke",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png)",
    gif: null,
    evolution: 8,
    legendary: false,
  },
  {
    name: "Machop", //10
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png)",
    gif: null,
    evolution: 9,
    legendary: false,
  },
  {
    name: "Blastoise",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png)",
    gif: null,
    evolution: null,
    legendary: false,
  },
  {
    name: "Wartortle",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png)",
    gif: null,
    evolution: 12,
    legendary: false,
  },
  {
    name: "Squirtle",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png)",
    gif: null,
    evolution: 13,
    legendary: false,
  },
  {
    name: "Raichu",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png)",
    gif: null,
    evolution: null,
    legendary: false,
  },
  {
    name: "Pikachu", //15
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png)",
    gif: null,
    evolution: 14,
    legendary: false,
  },
  {
    name: "Pichu",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png)",
    gif: null,
    evolution: 15,
    legendary: false,
  },
  {
    name: "Pidgeot",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png)",
    gif: null,
    evolution: null,
    legendary: false,
  },
  {
    name: "Pidgeotto",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png)",
    gif: null,
    evolution: 17,
    legendary: false,
  },
  {
    name: "Pidgey",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png)",
    gif: null,
    evolution: 18,
    legendary: false,
  },
  {
    name: "Golem", //20
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png)",
    gif: null,
    evolution: null,
    legendary: false,
  },
  {
    name: "Graveler",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png)",
    gif: null,
    evolution: 20,
    legendary: false,
  },
  {
    name: "Geodude",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png)",
    gif: null,
    evolution: 22,
    legendary: false,
  },

  //legendary
  {
    name: "Mew",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png)",
    gif: null,
    evolution: null,
    legendary: true,
  },
  {
    name: "Mewtwo",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png)",
    gif: null,
    evolution: null,
    legendary: true,
  },
  {
    name: "Moltres",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png)",
    gif: null,
    evolution: null,
    legendary: true,
  },
  {
    name: "Zapdos",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png)",
    gif: null,
    evolution: null,
    legendary: true,
  },
  {
    name: "Articuno",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png)",
    gif: null,
    evolution: null,
    legendary: true,
  },
  {
    name: "Suicune",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png)",
    gif: null,
    evolution: null,
    legendary: true,
  },
  {
    name: "Raikou",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png)",
    gif: null,
    evolution: null,
    legendary: true,
  },
  {
    name: "Entei",
    pic: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png)",
    gif: null,
    evolution: null,
    legendary: true,
  },
];

const seedPokemonPartner = () =>
  Pokemon_partner.bulkCreate(Pokemon_partner_data);

module.exports = seedPokemonPartner;
