const express = require("express");
const server = express();
const cors = require("cors");
require("dotenv").config();
const init = require("./lib/database");
const router = require("./routers/link");
const loginRouter = require("./routers/loginRouter");

init();
server.listen(process.env.PORT, () => {
  console.log(`server listening on Port ${process.env.PORT}`);
});

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// const urls = [
//   {
//     url: "https://www.instagram.com/",
//     title: "Get the inspiration of interior design here",
//     explanation:
//       "Architecture not only about engineering, it even lands to art and aesthetics. With us, you will get a residentical design with an extraordinary touch of art.",
//     image:
//       "https://images.unsplash.com/photo-1599389601093-5c13e0afb1f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
//   },
//   {
//     url: "https://www.facebook.com/",
//     title: "Get the inspiration with Facebook",
//     explanation: "Let's talk with your friends",
//     image:
//       "https://images.unsplash.com/photo-1488998287214-1e668a8e0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//   },
// ];

// server.get("/links", (req, res) => {
//   res.json(urls);
// });
server.use("/links", router);
server.use("/login", loginRouter);
