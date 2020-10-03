const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// Using mongoose in order to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected!");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
