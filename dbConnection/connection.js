const mongoose=require("mongoose");
require("dotenv").config();
async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.DB_LINK);
      console.log("server connected to database");
    } catch (err) {
      console.log(`database threw ${err}`);
    }
  };
  module.exports={connectToDatabase};