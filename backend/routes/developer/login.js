const express = require("express");
const router = express.Router();
// const developerLogin = require(".../models/developers/login");

router.post("/login", async (req, res) => {
  console.log("/login");
  console.log(req.body);
});

module.exports = router;
