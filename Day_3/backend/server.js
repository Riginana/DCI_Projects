const express = require("express");
const server = express();
const cors = require("cors");

server.listen(3535, () => {
  console.log("server listening");
});

server.use(cors());
server.use(express.urlencoded({ extended: true }));
const urls = [
  {
    url: "https://www.instagram.com/",
    title: "Get the inspiration of interior design here",
    explanation:
      "Architecture not only about engineering, it even lands to art and aesthetics. With us, you will get a residentical design with an extraordinary touch of art.",
    image:
      "https://images.unsplash.com/photo-1599389601093-5c13e0afb1f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  },
  {
    url: "https://www.facebook.com/",
    title: "Get the inspiration with Facebook",
    explanation: "Let's talk with your friends",
    image:
      "https://images.unsplash.com/photo-1488998287214-1e668a8e0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];

server.get("/links", (req, res) => {
  res.json(urls);
});

// server.get("/links", (req, res) => {
//   const urls =
//     '[{"url":"https://www.instagram.com/","title":"Instagram","explanation":"Enjoy your day with this app","image":"https://unsplash.com/photos/OM7AHmqnrnw"},{"url":"https://www.facebook.com/","title":"Facebook","explanation":"Let\'s talk with your friends","image":"https://unsplash.com/photos/Lu9FNRCqPys"}]';
//   res.send(urls);
// });
