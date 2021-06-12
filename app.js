const express = require("express");
const productRoute = require("./routes/products");
const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "You started the server!!",
  });
});

app.use("/products", productRoute);

app.listen(3000, console.log("Server Started!"));

/*
/auth/register
/auth/login
/auth/forgotpassword


/products/ (POST)
/products/ (GET)
/products/{id} (DELETE)
/products/{id} (GET)

*/
