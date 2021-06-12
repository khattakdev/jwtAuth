const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/register", (req, res) => {
  res.json({
    msg: "Register",
  });
});

router.post("/login", (req, res) => {
  // User.findOne({ email });

  const jwtUser = {
    username: "khattakdev",
    email: "me@khattak.dev",
  };
  jwt.sign(jwtUser, "githubEducation", (err, token) => {
    if (err) {
      return res.status(500).json({
        error: "Something went wrong!",
      });
    }
    return res.json({ token });
  });
  //   res.json({
  //     msg: "Login",
  //   });
});

module.exports = router;
