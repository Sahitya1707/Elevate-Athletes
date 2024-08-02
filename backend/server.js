const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

connectDB();
const port = process.env.PORT || 5001;
// const connectDB
app.use(cors());
app.listen(port, () => {
  console.log(`App running in ${port}`);
});
