const express = require("express");
 
const app = express();

app.use("/home", function (redirect, response) {
    response.redirect("about");
});

app.use("/about", function(request, response) {
    response.send("<h1>About</h1>");
});

app.listen(5000, () => console.log("Server started at 5000 port"));
