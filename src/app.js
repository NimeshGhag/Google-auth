const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");


const app = express();


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
