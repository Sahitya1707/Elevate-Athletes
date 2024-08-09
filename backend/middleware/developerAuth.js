const jwt = require("jsonwebtoken");
const DeveloperAuthModal = require(".././models/developer/login");
const bcrypt = require("bcrypt");
const {
  generateDeveloperLoginToken,
} = require("../controllers/developerLoginJWT");

const developerAuthentication = (req, res, next) => {
  //   const authHeader = req.headers("authorization");

  const { email, password } = req.body;

  //   console.log(req.headers);
  // finding the email from the database
  DeveloperAuthModal.findOne({ email })
    .then((loginData) => {
      //   console.log(loginData);
      // if loginData is present in the database
      if (loginData) {
        const hashedPassword = loginData.password;
        // let's compare the hashed password with the user logged in password
        bcrypt.compare(password, hashedPassword, (err, result) => {
          if (err) {
            console.log("Error comparing password", err);
          }
          if (result) {
            console.log("Password autheticated");
            const token = generateDeveloperLoginToken(loginData.toJSON());
            res.json({
              success: true,
              message: "Authentication Successful",
              token,
            });
          } else {
            console.log("Authetication failed does not match");
          }
        });
      } else {
        console.log("invalid credentials");
        return res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  //   next();
};

module.exports = developerAuthentication;
