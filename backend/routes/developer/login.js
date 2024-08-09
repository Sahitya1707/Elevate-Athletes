const express = require("express");
const router = express.Router();
const DeveloperLoginModal = require("../../models/developer/login");
const developerAuthentication = require("../../middleware/developerAuth");
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.post("/login", developerAuthentication);

module.exports = router;
