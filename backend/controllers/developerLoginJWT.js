const jwt = require("jsonwebtoken");

const generateRefreshToken = (payload) => {
  console.log(payload);
  try {
    const secretKey = process.env.SECRET_JWT_KEY_D;
    const options = {
      expiresIn: "2d",
      audience: "developer",
      issuer: "elevate-athletes-developer",
      algorithm: "HS256",
    };
    const refreshToken = jwt.sign(payload, secretKey, options);

    // Creating a refresh token

    return refreshToken;
  } catch {
    console.error("Error creating token:");
    throw new Error("Error creating token"); // Throw error to be handled by caller
  }
};
const generateAccessToken = (refreshToken) => {
  const accessToken = jwt.sign(
    {
      refreshToken,
    },
    process.env.ACCESS_JWT_KEY,
    {
      expiresIn: "15m",
    }
  );
  return accessToken;
};
module.exports = { generateRefreshToken, generateAccessToken };
