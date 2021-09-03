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

async function create(){
  const newLink = new Link({
    ...link
  });
  return await newLink.save();
}
module.exports = {
  create
}
