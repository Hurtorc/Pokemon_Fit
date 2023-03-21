const router = require("express").Router();
const { Sequelize } = require("sequelize");
const { Profile, Food, Pokemon_partner } = require("../../models");
//User routes are completed for you so you don't have to deal with setting up authentication
//Study this code to see how it works, and how it is connected to the frontend

// POST /api/profile is a registration route for creating a new user

//GET info for a specific user Profile
router.get("/", async (req, res) => {
  try {
    const userProfile = await Profile.findOne({
      where: {
        user_id: req.body.user_id, // or a user ID can be provided. This is unsafe if we ever went live, but for now it's fine.
      },
    });
    // res.status(200).json(profile); // used for testing
    if (!userProfile) {
      res.status(400).json({ message: "No user Profile found!" });
      return;
    }
    const profileReturn = userProfile.get({ plain: true });
    //const profileReturn = userProfile.profile.dataValues;
    console.log("USER", profileReturn);

    const foodReturn = await Food.findAll({
      where: {
        user_id: req.body.user_id, // or a user ID can be provided. This is unsafe if we ever went live, but for now it's fine.
      },
    });
    const food = foodReturn.map((food) => food.get({ plain: true }));
    // res.status(200).json(food); // used for testing
    if (!foodReturn) {
      res.status(400).json({ message: "No user Food found!" });
      return;
    }
    const pokemon = await Pokemon_partner.findAll({
      where: {
        id: profileReturn.pokemon_partner, // or a user ID can be provided. This is unsafe if we ever went live, but for now it's fine.
      },
    });
    // res.status(200).json(pokemon); // used for testing
    if (!pokemon) {
      res.status(400).json({ message: "No user Pokemon found!" });
      return;
    }

    //}
    // test did not go well but has potential for consolidation of lines of code
    // where: {
    //   user_id: req.session.user_id || req.body.user_id,// or a user ID can be provided. This is unsafe if we ever went live, but for now it's fine.
    //   $or: [
    //     { '$Food.user_id$' : req.session.user_id || req.body.user_id },
    //   ],
    // },
    // include: [
    //   {
    //     model: Food,
    //     required: false,
    //   },
    // ],
    // });
    // }
    if (profileReturn.streak <= 1) {
      //check yesterday's calories against the goal
      if (
        1000 < profileReturn.calorie_goal &&
        profileReturn.calorie_goal < 2000
      ) {
        // 1000 and 2000 are just placeholders and eventually will be replaced with the user's goal
        // for testing set user goal to 1500 for streak/evo test and 500 for reassign base pokemon test
        profileReturn.streak + 1;
      } else {
        profileReturn.streak = 0;
        const pid = await findNewBasicPokemon();
        console.log("PID", pid);
        profileReturn.pokemon_partner = pid;
      } //close if dashboard <= 1
      // if streak > 2 evo pokemon and reset streak    // inside evo if no evo available then assign legendary pokemon randomly
      if (profileReturn.streak == 2) {
        //evo pokemon
        profile.streak = 0;
        const pokemonEvo = Pokemon_partner.findOne({
          where: {
            id: profileReturn.evolution,
          },
        });
        if (pokemonEvo === null) {
          //build list of legendary pokemon
          let legendary_pokemon = Pokemon_partner.findAll({
            where: {
              legendary: { [Sequelize.Op.is]: true },
            },
          });
          console.log("LEGENDARY", legendary_pokemon);
          //assign legendary pokemon randomly from legendary pokemon list
          profileReturn.pokemon_partner =
            legendary_pokemon[
              Math.floor(Math.random() * legendary_pokemon.length)
            ].id;
        } else {
          profileReturn.pokemon_partner = pokemonEvo.id;
        }
      }
    }
    // all updates to profile should be done here
    const updateProfile = await Profile.findOne({
      where: {
        user_id: profileReturn.user_id,
      },
      update: {
        streak: profileReturn.streak,
        Pokemon_partner: profileReturn.pokemon_partner,
      },
    });

    const pokemonReturn = await Pokemon_partner.findOne({
      where: {
        id: profileReturn.pokemon_partner,
      },
    });

    console.log("PROFILE", profileReturn);
    console.log("FOOD", food);
    console.log("POKEMON", pokemonReturn);
    // const
    res.status(200).json({ profileReturn, food, pokemonReturn });
  } catch (err) {
    //console.log("ERR", err);
    res.status(400).json({ message: err });
  }
});

async function findNewBasicPokemon() {
  //build list of basic pokemon
  let basic_pokemon = await Pokemon_partner.findAll({
    where: {
      evolution: { [Sequelize.Op.not]: null },
      legendary: false,
    },
  });
  const pokemon = basic_pokemon.map((pokemon) => pokemon.get({ plain: true }));
  //console.log("POKEMON", pokemon); // for testing
  return pokemon[Math.floor(Math.random() * pokemon.length)]?.id;
}

module.exports = router;
