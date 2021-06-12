const express = require("express");

const verifyToken = require("../middleware/verification");
const router = express.Router();

router.get("/", verifyToken, (req, res) => {
  res.json({
    msg: "All Products Fetched!",
  });
});

router.post("/", verifyToken, (req, res) => {
  res.json({
    msg: "Product Added!",
  });
});

module.exports = router;
