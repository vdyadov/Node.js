const fs = require("fs");
 
let readableStream = fs.createReadStream("test.txt", "utf8");
 
let writeableStream = fs.createWriteStream("test1.txt");
 
readableStream.pipe(writeableStream);