const express = require("express");
const server = express();
const cors = require("cors");

server.listen(3535, () => {
  console.log("server listening");
});

server.use(cors());
server.use(express.urlencoded({ extended: true }));

server.get("/links", (req, res) => {
  const urls =
    '[{"url":"https://www.instagram.com/","title":"Instagram","explanation":"Enjoy your day with this app","image":"https://unsplash.com/photos/OM7AHmqnrnw"},{"url":"https://www.facebook.com/","title":"Facebook","explanation":"Let\'s talk with your friends","image":"https://unsplash.com/photos/Lu9FNRCqPys"}]';
  res.send(urls);
});
