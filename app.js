const http = require("http");
const fs = require("fs");
  
http.createServer(function(request, response){
     
    console.log(`Запрошенный адрес: ${request.url}`);
    // считываем путь
    const filePath = request.url.substr(1);
    // проверяем есть ли такой файл
    fs.access(filePath, fs.constants.R_OK, err => {
        // если произошла ошибка - отправляем статусный код 404
        fs.readFile(filePath, function(err, data){
              
            if(err){
                      
                response.statusCode = 404;
                response.end("Resourse not found!");
            }   
            else{
                response.end(data);
            }
        });
        return err;
      });
}).listen(5000, function(){
    console.log("Server started at 5000 port");
});