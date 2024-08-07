const mongoose = require("mongoose");
const config = require("config");
const bcrypt = require("bcryptjs");

const db = process.env.MONGODB_URI;

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    // console.log(db);
    await mongoose.connect(db, {});

    //   hashing the password

    console.log("MongoDb connected");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
