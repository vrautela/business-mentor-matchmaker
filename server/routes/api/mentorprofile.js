const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const MentorProfile = require("../../models/MentorProfile");
const User = require("../../models/User");
const request = require("request");
const config = require("config");

// @route GET api/mentorprofile/me
// @desc Get current user's profile
// @access Private

router.get("/me", auth, async (req, res) => {
  try {
    const mentorProfile = await MentorProfile.findOne({
      user: req.user.id,
    }).populate("user", "name");

    if (!mentorProfile) {
      res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(mentorProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/mentorprofile
// @desc Create or update a user a mentor profile
// @access Private

router.post(
  "/",
  [
    auth,
    [
      check("name", "A name is required").not().isEmpty(),
      check("email", "An email is required").not().isEmpty(),
      check("mentordesc", "A description is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      website,
      email,
      mentordesc,
      webdev,
      finance,
      support,
      organization,
      analytics,
      planning,
      marketing,
    } = req.body;

    // Build profile object

    const profileFields = {};

    profileFields.user = req.user.id;
    if (name) profileFields.name = name;
    if (website) profileFields.website = website;
    if (email) profileFields.email = email;
    if (mentordesc) profileFields.mentordesc = mentordesc;

    // Build social object

    profileFields.areasofhelp = {};

    if (webdev) profileFields.areasofhelp.webdev = webdev;
    if (finance) profileFields.areasofhelp.finance = finance;
    if (support) profileFields.areasofhelp.support = support;
    if (organization) profileFields.areasofhelp.organization = organization;
    if (analytics) profileFields.areasofhelp.analytics = analytics;
    if (planning) profileFields.areasofhelp.planning = planning;
    if (marketing) profileFields.areasofhelp.marketing = marketing;

    try {
      let mentorProfile = await MentorProfile.findOne({ user: req.user.id });

      if (mentorProfile) {
        // Update
        mentorProfile = await MentorProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(mentorProfile);
      }

      // Create
      mentorProfile = new MentorProfile(profileFields);

      await mentorProfile.save();
      return res.json(mentorProfile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route GET api/mentorprofile
// @desc Get all profiles
// @access Public

router.get("/", async (req, res) => {
  try {
    const mentorprofiles = await MentorProfile.find().popoulate("user", "name");
    res.json(mentorprofiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route Get api/mentorprofile/user/:user_id
// @desc Get profile of a single mentor
// @access Public

router.get("/user/:user_id", async (req, res) => {
  try {
    const mentorprofile = await MentorProfile.findOne({
      user: req.params.user_id,
    }).populate("user", "name");

    if (!mentorprofile)
      return res.status(400).json({ msg: "Profile not found" });

    res.json(mentorprofile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server error");
  }
});

// @route DELETE api/mentorprofile
// @desc Delete profile of a single mentor
// @access Private
router.delete("/", auth, async (req, res) => {
  try {
    await MentorProfile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
