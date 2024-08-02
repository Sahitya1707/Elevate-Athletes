const mongoose = require("mongoose");
const config = require("config");
const bcrypt = require("bcryptjs");

const db = process.env.MONGODB_URI;

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    // console.log(db);
    await mongoose.connect(db, {});
    const superAdminCredentials = {
      username: "neupanesahitya1@gmail.com",
      password: "Ruksha1010.*",
      role: "superAdmin",
    };

    //   hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
      superAdminCredentials.password,
      salt
    );
    console.log(hashedPassword);
    console.log(db);

    console.log("MongoDb connected");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
