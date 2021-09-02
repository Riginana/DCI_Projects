const Link = require("../models/postLink");

module.exports = {
  create: async function (req, res) {
    try {
      const link = req.body;
      const newLink = new Link({
        ...link,
      });
      await newLink.save();
      res.json(newLink);
    } catch (err) {
      res.json(err);
    }
  },
};
