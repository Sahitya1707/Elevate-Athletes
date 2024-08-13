const jwt = require("jsonwebtoken");

const generateDeveloperLoginToken = (payload) => {
  console.log(payload);
  try {
    const secretKey = process.env.SECRET_JWT_KEY_D;
    const options = {
      expiresIn: "15m",
      audience: "developer",
      issuer: "elevate-athletes-developer",
      algorithm: "HS256",
    };
    const accessToken = jwt.sign(payload, secretKey, options);
    console.log("ACCESS Token has been created");
    console.log(accessToken);

    // Creating a refresh token
    const refreshToken = jwt.sign(
      {
        username: `D5UJ0EC3NL`,
      },
      process.env.ACCESS_JWT_KEY,
      {
        expiresIn: "1d",
      }
    );
    console.log("This is refresh token");
    console.log(refreshToken);
    const allToken = {
      accessToken,
      refreshToken,
    };
    // console.log(allToken);
    return allToken;
  } catch {
    console.error("Error creating token:");
    throw new Error("Error creating token"); // Throw error to be handled by caller
  }
};
module.exports = { generateDeveloperLoginToken };
