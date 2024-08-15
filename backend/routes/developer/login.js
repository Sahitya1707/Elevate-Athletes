const express = require("express");
const router = express.Router();

const developerAuthentication = require("../../middleware/developer/developerAuth");
const { verifyLogin } = require("../../middleware/developer/verifyLogin");
const { refreshToken } = require("../../middleware/developer/refreshToken");
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.post("/login", developerAuthentication);
router.get("/verify", verifyLogin);
router.post("/refresh", refreshToken);

module.exports = router;
