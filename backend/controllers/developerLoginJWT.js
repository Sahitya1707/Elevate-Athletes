const jwt = require("jsonwebtoken");

const generateRefreshToken = (payload) => {
  try {
    const refreshKey = process.env.REFRESH_JWT_KEY_D;
    const options = {
      expiresIn: "2d",
      audience: "developer",
      issuer: "elevate-athletes-developer",
      algorithm: "HS256",
    };
    const refreshToken = jwt.sign(payload, refreshKey, options);

    // Creating a refresh token

    return refreshToken;
  } catch {
    console.error("Error creating token:");
    throw new Error("Error creating token"); // Throw error to be handled by caller
  }
};
const generateAccessToken = (data) => {
  const accessToken = jwt.sign(
    {
      email: data,
      otherValue: "12FX21",
    },
    process.env.ACCESS_JWT_KEY_D,
    {
      expiresIn: "15m",
    }
  );
  return accessToken;
};
module.exports = { generateRefreshToken, generateAccessToken };
