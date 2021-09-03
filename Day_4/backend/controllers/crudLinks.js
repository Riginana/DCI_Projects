const Link = require("../models/postLink");

module.exports = {
  create: async function (req, res, next) {
    try {
      console.log(req.body);

      const newLink = await Link.create(
        req.body.url,
        req.body.title,
        req.body.explanation,
        req.body.image,
      );
      res.json(newLink);
    } catch (err) {
      next(err);
    }
  },
};
