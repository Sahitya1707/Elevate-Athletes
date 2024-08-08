const jwt = require("jsonwebtoken");

const developerAuthentication = (req, res, next) => {
  //   const authHeader = req.headers("authorization");
  console.log(jwt);
  console.log("middle ware");
  next();
};

module.exports = developerAuthentication;
