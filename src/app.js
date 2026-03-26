const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const passport = require("passport");


const app = express();

app.use(passport.initialize());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
