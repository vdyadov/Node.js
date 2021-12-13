const os = require("os");
const greeting = require("./greeting");
const User = require("./user");

let userName = os.userInfo().username;

let me = new User("Vladislav", 18);
me.sayHi();

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));