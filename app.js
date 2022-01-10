const express = require("express");
 
const app = express();


const urlencodedParser = express.urlencoded({extended: false});

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post("/", urlencodedParser, function(request, response) {
    if(!request.body) 
        return response.sendStatus(400);
    
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.listen(5000, () => console.log("Server started at 5000 port"));
