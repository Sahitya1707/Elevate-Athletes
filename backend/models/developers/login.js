const mongoose = require("mongoose");

const developerLoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

// Creation of model
const developerLogin = mongoose.model("developerLogin", developerLoginSchema);
// exporting the module
module.exports = developerLogin;
