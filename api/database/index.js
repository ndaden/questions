const mongoose = require("mongoose");

const connectToDatabase = async (connectionString, dbName) => {
  try {
    await mongoose.connect(connectionString, { dbName: dbName });
    console.log("Successfully connected to the database.");
  } catch (e) {
    console.log(
      "Error while connecting to the Database. Please contact your system admin."
    );
  }
};

module.exports = { connectToDatabase };
