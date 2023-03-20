const router = require("express").Router();
const { Sequelize } = require("sequelize");
const { Profile } = require("../../models");
//User routes are completed for you so you don't have to deal with setting up authentication
//Study this code to see how it works, and how it is connected to the frontend

// POST /api/profile is a registration route for creating a new user
router.post("/", async (req, res) => {
try{
const newProfile = await Profile.create({
    
    // or a user ID can be provided. This is unsafe if we ever went live, but for now it's fine.
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    dob: req.body.dob,
    height: req.body.height,
    weight: req.body.weight,
    gender: req.body.gender,
    calorie_goal: req.body.calorie_goal,
    user_id: req.session.userId || req.body.user_id,
});
res.status(200).json(newProfile);
} catch (err) {
    res.status(500).json(err);
  }
});

//GET info for a specific user Profile
router.get("/:userID", async (req, res) => {
  try {
    const profile = await profile.findOne({
      where: {
        user_id: req.params.userID,
      },
    });
    if (!profile) {
      res.status(400).json({ message: "No user Profile found!" });
      return;
    }
    res.status(200).json(profile);
    } catch (err) {
    res.status(400).json({ message: "No user found!" });
    }
});

module.exports = router;
