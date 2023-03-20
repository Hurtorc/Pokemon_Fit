const router = require("express").Router();
const { Sequelize } = require("sequelize");
const { Profile, Food, Pokemon_partner } = require("../../models");
//User routes are completed for you so you don't have to deal with setting up authentication
//Study this code to see how it works, and how it is connected to the frontend

// POST /api/profile is a registration route for creating a new user

//GET info for a specific user Profile
router.get("/", async (req, res) => {
   try {
     const dashaboradInfo = await Profile.findAll({
  //   where: {
  //     user_id: req.body.user_id,// or a user ID can be provided. This is unsafe if we ever went live, but for now it's fine.
  //   },
  // });
  // // res.status(200).json(profile); // used for testing
  // if (!profile) {
  //   res.status(400).json({ message: "No user Profile found!" });
  //   return;
  // }

//}
      // test did not go well but has potential for consolidation of lines of code
      where: { 
        user_id: req.session.user_id || req.body.user_id,// or a user ID can be provided. This is unsafe if we ever went live, but for now it's fine.
        $or: [
          { '$Food.user_id$' : req.session.user_id || req.body.user_id },
        ],
      },
      include: [
        {
          model: Food,
          required: false,
        },
      ],
    });
    if (!dashaboradInfo) {
        res.status(400).json({ message: "No user Profile found! "+ err});
        return;
      }
      res.status(200).json(dashaboradInfo);
    }
    // if (dashaboradInfo.streak <= 1) {
    //   //check yesterday's calories against the goal
    //   if (1000 > dashboardInfo.calorie_goal && dashboardInfo.calorie_goal < 2000) {
    //     // 1000 and 2000 are just placeholders and eventually will be replaced with the user's goal
    //     // for testing set user goal to 1500 for streak/evo test and 500 for reassign base pokemon test
    //     dashboardInfo.streak + 1;
    //   } else {
    //     dashboardInfo.streak = 0;
    //     dashboardInfo.pokemon_partner_id = findNewBasicPokemon();
    // }//close if dashboard <= 1
    //     // if streak > 2 evo pokemon and reset streak    // inside evo if no evo available then assign legendary pokemon randomly
    //   if (dashboardInfo.streak === 2){
    //     //evo pokemon
    //     dashboardInfo.streak = 0;
    //     const pokemonEvo = Pokemon_partner.findOne({
    //       where: {
    //         id: dashboardInfo.evolution,
    //       },
    //     });
    //     if (pokemonEvo===null){
    //         //build list of legendary pokemon
    //         let legendary_pokemon = Pokemon_partner.findAll({
    //             where: {
    //             legendary: true,
    //             },
    //         });
    //         //assign legendary pokemon randomly from legendary pokemon list
    //         dashboardInfo.pokemon_partner_id = legendary_pokemon[Math.floor(Math.random() * legendary_pokemon.length)].id;
    //     }
    //   }
    // }
    // // all updates to profile should be done here
    // const update_profile = Profile.update({
    //   streak: dashboardInfo.streak,
    //   Pokemon_partner_id: dashboardInfo.pokemon_partner_id,
    // });

    // const pokemon = await Pokemon_partner.findOne({
    //     where: {
    //       id: dashboardInfo.pokemon_partner_id,
    //     },
    //   });
    // res.status(200).json(profile, pokemon);
 catch (err) {
  res.status(500).json(err);
  }
});

function findNewBasicPokemon() {
  //build list of basic pokemon
  let basic_pokemon = Pokemon_partner.findAll({
    where: {
      evolution: !null,
      legendary: false,
    },
  });
  return basic_pokemon[Math.floor(Math.random() * basic_pokemon.length)].id;
}

module.exports = router;
