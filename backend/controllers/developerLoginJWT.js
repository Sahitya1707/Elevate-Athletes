const jwt = require("jsonwebtoken");

const generateDeveloperLoginToken = (payload) => {
  try {
    const secretKey = process.env.SECRET_JWT_KEY_D;
    const options = {
      expiresIn: "1hr",
      audience: "developer",
      issuer: "elevate-athletes-developer",
      algorithm: "HS256",
    };
    const token = jwt.sign(payload, secretKey, options);
    console.log("Token has been created");
    console.log(token);
    return token;
  } catch {
    console.error("Error creating token:", err);
    throw new Error("Error creating token"); // Throw error to be handled by caller
  }
};
module.exports = { generateDeveloperLoginToken };
