const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

// Bring in the user model from models.
const User = require("../../models/User");

// @Route POST api/users
// @desc Register mentors / businesses.
// @access Public
router.post(
  "/",
  [
    // Using express-validator in order check for the appropriate inputs
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please include a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Pulling name, email and password from the input fields.
    const { name, email, password, mentor, business } = req.body;

    try {
      // See if user exits
      let user = await User.findOne({ email });

      if (
        (mentor == false && business == false) ||
        (mentor == true && business == true)
      ) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Please choose only ONE user type" }] });
      }

      if (user) {
        return res
          .status(400)
          .json({ errrors: [{ msg: "User already exists" }] });
      }

      // Creating a new object of the mongoose model user.
      user = new User({
        name,
        email,
        password,
        mentor,
        business,
      });

      // Encrypt the password using bcrypt
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save the user to the database
      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
