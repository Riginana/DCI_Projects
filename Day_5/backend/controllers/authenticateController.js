const UserModel = require("../models/userLogin");
const getToken = require("../lib/token");

module.exports = {
  userLogin: async (req, res, next) => {
    try {
      const user = await UserModel.login(req.body.email, req.body.password);
      // res.send("Funktioniert");
      console.log(user);
      if (user) {
        const token = await getToken.createToken(
          req.body.email,
          req.body.password
        );
        console.log(token);
        res.send({ token });
      } else {
        res.send("failed");
      }
    } catch (err) {
      res.status(401).send();
      next(err);
    }
  },
};
