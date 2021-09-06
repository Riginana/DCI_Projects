const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserLogin = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const User = mongoose.model("User", UserLogin);

async function login({ email, password }) {
  const user = await User.findOne({ email: email });
  console.log(user);
  if (!user) throw new Error("Email not found!");
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) throw new Error("Password incorrect!");
  return user;
}

module.exports = { login };
