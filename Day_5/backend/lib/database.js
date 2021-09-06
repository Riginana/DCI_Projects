require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const init = async function () {
  const db = await mongoose.connection;
  db.on("error", console.error);
  console.log("db is online");
};

module.exports = init;
