const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    msg: "All Products Fetched!",
  });
});

router.post("/", (req, res) => {
  res.json({
    msg: "Product Added!",
  });
});

module.exports = router;
