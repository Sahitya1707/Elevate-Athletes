const jwt = require("jsonwebtoken");
const DeveloperAuthModal = require(".././models/developer/login");
const bcrypt = require("bcrypt");
const {
  generateRefreshToken,
  generateAccessToken,
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
            const refreshToken = generateRefreshToken(loginData.toJSON());

            res.cookie("refreshToken", refreshToken, {
              httpOnly: true, // Helps prevent XSS attacks
              secure: false, // Set to true in production if using HTTPS
              sameSite: "", // Helps prevent CSRF attacks
              // making it valid for 2 days
              expires: new Date(Date.now() + 60 * 60 * 24 * 100 * 2),
            });
            const accessToken = generateAccessToken(refreshToken);
            res.cookie("accessToken", accessToken, {
              secure: false,

              httpOnly: false,
              sameSite: "", // Helps prevent CSRF attacks
              // making it valid for 15 min
              expires: new Date(Date.now() + 15 * 60 * 100), //
            });

            res.json({
              success: true,
              accessToken: accessToken,
              message: "Authentication Successful",
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
