const jwt = require("jsonwebtoken");

const generateDeveloperLoginToken = (payload) => {
  console.log(payload);
  const secretKey = process.env.SECRET_JWT_KEY_D;
  const options = {
    expiresIn: "1hr",
  };
  const token = jwt.sign(payload, secretKey, options);
  console.log("Token has been created");
  console.log(token);
};
module.exports = { generateDeveloperLoginToken };
