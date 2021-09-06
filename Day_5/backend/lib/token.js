const jwt = require("jsonwebtoken");

const algorithm = "HS256";

const createToken = (email, password) => {
  const secret = process.env.SECRET;
  const options = {
    algorithm,
    expiresIn: "30s",
  };

  return jwt.sign({ password, email }, secret, options);
};

// const verify = (token) => {
//   return jwt.verify(
//     token,
//     process.env.TOKEN_SECRET,
//     { algorithms: [algorithm] },
//     (error, payload) => {
//       if (error) throw new Error("token invalid");
//       return payload;
//     }
//   );
// };

module.exports = {
  createToken,
  // verify,
};
