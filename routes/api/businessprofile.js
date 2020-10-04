const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const BusinessProfile = require("../../models/BusinessProfile");
const User = require("../../models/User");
const request = require("request");
const config = require("config");

// @route GET api/businessProfile/me
// @desc Get current user's profile
// @access Private

router.get("/me", auth, async (req, res) => {
  try {
    const businessProfile = await BusinessProfile.findOne({
      user: req.user.id,
    }).populate("user", "name");

    if (!businessProfile) {
      res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(businessProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/businessProfile
// @desc Create or update a user a business profile
// @access Private

router.post(
  "/",
  [
    auth,
    [
      check("name", "A name is required").not().isEmpty(),
      check("email", "An email is required").not().isEmpty(),
      check("businessdesc", "A description is required").not().isEmpty(),
      check("webdev", "This field is required").not().isEmpty(),
      check("finance", "This field is required").not().isEmpty(),
      check("support", "This field is required").not().isEmpty(),
      check("organization", "This field is required").not().isEmpty(),
      check("analytics", "This field is required").not().isEmpty(),
      check("planning", "This field is required").not().isEmpty(),
      check("marketing", "This field is required").not().isEmpty(),
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
      businessdesc,
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
    if (businessdesc) profileFields.businessdesc = businessdesc;

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
      let businessProfile = await BusinessProfile.findOne({
        user: req.user.id,
      });

      if (businessProfile) {
        // Update
        businessProfile = await BusinessProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(businessProfile);
      }

      // Create
      businessProfile = new BusinessProfile(profileFields);

      await businessProfile.save();
      return res.json(businessProfile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route GET api/businessProfile
// @desc Get all profiles
// @access Public

router.get("/", async (req, res) => {
  try {
    const businessProfiles = await BusinessProfile.find().populate(
      "user",
      "name"
    );
    res.json(businessProfiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route GET api/businessProfile/list
// @desc Get all profiles
// @access Public

router.get("/list", async (req, res) => {
  try {
    const businessProfiles = await BusinessProfile.find().select(
      "-email -mentordesc"
    );
    res.json(businessProfiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route Get api/businessProfile/user/:user_id
// @desc Get profile of a single business
// @access Public

router.get("/user/:user_id", async (req, res) => {
  try {
    const businessProfile = await BusinessProfile.findOne({
      user: req.params.user_id,
    }).populate("user", "name");

    if (!businessProfile)
      return res.status(400).json({ msg: "Profile not found" });

    res.json(businessProfile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server error");
  }
});

// @route DELETE api/BusinessProfile
// @desc Delete profile of a single mentor
// @access Private
router.delete("/", auth, async (req, res) => {
  try {
    await BusinessProfile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
