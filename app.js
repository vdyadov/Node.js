const express = require("express");
const fs = require("fs");
 
const app = express();

app.use(function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.listen(5000, () => console.log("Server started at 5000 port"));