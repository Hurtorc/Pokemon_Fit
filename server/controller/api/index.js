//index.js inside /api combines all api routes and exports one router middleware module
const router = require('express').Router();

const profileRoutes = require('./profileRoutes');
const userRoutes = require('./userRoutes');
//const foodRoutes = require('./foodRoutes');
const pokemonRoutes = require('./pokemonRoutes.js');
const dashboardRoutes = require('./dashboardRoutes');

//userRoutes will have /user prepended to all routes
router.use('/user', userRoutes);
// //profileRoutes will have /profile prepended to all routes
router.use('/profile', profileRoutes);
// //foodRoutes will have /food prepended to all routes
// router.use('/food', foodRoutes);
// No reason for this yet
router.use('/pokemon', pokemonRoutes);

router.use('/dashboard', dashboardRoutes);

module.exports = router;
