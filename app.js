const http = require("http");
const fs = require("fs");
  
http.createServer(async (request, response) => {
      
    if (request.url === "/user") {
        
        const buffers = []; // буфер для получаемых данных

        for await (const chunk of request) {
            buffers.push(chunk);        // добавляем в буфер полученные данные
        }

        const user = JSON.parse(Buffer.concat(buffers).toString());
        console.log(user.name,"-", user.age);
        response.end("Данные успешно получены");
    }
    else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
}).listen(5000, () => console.log("Server started at 5000 port"));