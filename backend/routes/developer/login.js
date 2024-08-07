const express = require("express");
const router = express.router();
const developerLogin = require(".../models/developer/login");

// adding the admin
router.add("/developer/api/add", async (req, res) => {
  console.log("developer has been aded");
});
// in most of the case post method is used for sending the data to the server
router.post("/developer/api/login", async (req, res) => {
  console.log("Post Method used");
});

module.exports = router;
