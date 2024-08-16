/**
 * This is for the authentication of the user if he is admin or not
 * .
 */
const jwt = require("jsonwebtoken");
const { generateAccessToken } = require("../../controllers/developerLoginJWT");
const verifyLogin = (req, res) => {
  const accessToken = req.cookies["accessToken"];
  const refreshToken = req.cookies["refreshToken"];

  console.log("-------------");

  if (!accessToken && !refreshToken) {
    return res.status(401).send("Access Denied. No token provided");
  }

  try {
    const decodeAccessToken = jwt.verify(
      accessToken,
      process.env.ACCESS_JWT_KEY_D
    );

    const email = decodeAccessToken.email;
    res.json({
      message: "user verified",
      email: email,
      condition: "Access Token verifies",
    });
  } catch (err) {
    if (!accessToken) {
      console.log("Access Token not provided");
    }
    try {
      const decodeRefreshToken = jwt.verify(
        refreshToken,
        process.env.REFRESH_JWT_KEY_D
      );

      const email = decodeRefreshToken.email;
      const accessToken = generateAccessToken(email);
      console.log(accessToken);
      res.cookie("accessToken", accessToken, {
        secure: false,

        httpOnly: true,
        sameSite: "", // Helps prevent CSRF attacks
        // making it valid for 15 min
        expires: new Date(Date.now() + 15 * 60 * 1000), //
      });
      res.json({
        message: "User verified",
        email: email,
        condition: "Access Token Refreshed",
      });
      // Generating access token
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = { verifyLogin };
