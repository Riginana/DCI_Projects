const bcrypt = require("bcrypt");

const newBcrypt = bcrypt.hashSync("1234", 12);
console.log(newBcrypt);
