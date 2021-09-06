const mongoose = require("mongoose");

const linkSchema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Link = mongoose.model("link", linkSchema);

async function create(url, title, image, explanation) {
  const newLink = new Link({
    url,
    title,
    image,
    explanation,
  });
  return await newLink.save();
}
async function readAll() {
  return await Link.find();
}

module.exports = {
  create,
  readAll,
};
