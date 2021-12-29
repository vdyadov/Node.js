const fs = require("fs");
 
let writeableStream = fs.createWriteStream("test.txt");
writeableStream.write("Привет мир!\n");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи\n");
let readableStream = fs.createReadStream("test.txt", "utf8");
 
readableStream.on("data", function(chunk){ 
    console.log(chunk);
});