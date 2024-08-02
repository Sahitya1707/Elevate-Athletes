const express = require("express");
const router = express.router();
const developerLogin = require(".../models/developer/login");

// adding the admin
router.add("/developer/api/add", async (req, res) => {
  console.log("developer has been aded");
});

module.exports = router;
