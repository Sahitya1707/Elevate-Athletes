const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const developerRoute = require("./routes/developer/login");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
connectDB();
const port = process.env.PORT || 5001;
// const connectDB
app.use(cors());
app.listen(port, () => {
  console.log(`App running in ${port}`);
});

app.use(express.json()); // Add this line before app.use("/developer/api/", developerRoute);

app.use("/developer/api", developerRoute);
