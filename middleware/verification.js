const jwt = require("jsonwebtoken");

module.exports = function verifyToken(req, res, next) {
  const tokenHeader = req.headers["authorization"];

  if (typeof tokenHeader !== "undefined") {
    const authToken = tokenHeader.split(" "); // Bearer jasdihasduhasduhasd
    const token = authToken[1];

    jwt.verify(token, "githubEducation", (err, data) => {
      if (err) {
        return res.json({
          error: "Invalid Token",
        });
      }
      req.data = data;
      next();
    });
  } else {
    return res.json({
      error: "Token Required",
    });
  }
};
