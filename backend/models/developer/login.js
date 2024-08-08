const mongoose = require("mongoose");

const developerLoginSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Creation of model
const DeveloperLogin = mongoose.model("developerLogin", developerLoginSchema);
// exporting the module
module.exports = DeveloperLogin;
