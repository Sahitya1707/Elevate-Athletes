/**
 * This is for the authentication of the user if he is admin or not
 * .
 */
const jwt = require("jsonwebtoken");
const verifyLogin = (req, res, next) => {
  console.log("This is check login");
  console.log(req.cookies);
  const refreshToken = req.cookies["refreshToken"];
  if (!refreshToken) {
    return res.status(401).send("Access Denied. No refresh token provides");
  }
};

module.exports = { verifyLogin };
