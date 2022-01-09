const http = require("http");
const fs = require("fs");
  
http.createServer(function(request, response){
     
    if (request.url === "/user") {
         
        let data = "";
        request.on("data", chunk => {
            data += chunk;
        });
        request.on("end", () => {
            console.log(data);
            response.end("get data is ok!");
        });
    }
    else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
}).listen(5000, () => console.log("Server started at 5000 port"));