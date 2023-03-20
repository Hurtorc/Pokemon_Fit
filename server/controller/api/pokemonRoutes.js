const router = require("express").Router();
const { Sequelize } = require("sequelize");
const { Pokemon_partner } = require("../../models");

// POST /api/pokemon is a registration route for creating a new user
router.post("/", async (req, res) => {
    try {
        const newPokemon = await Pokemon_partner.create({
            name: req.body.name,
            pic: req.body.pic,
            gif: req.body.gif,
            evolution: req.body.evolution,
            legendary: req.body.legendary,
        });
        res.status(200).json(newPokemon);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;