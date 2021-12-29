const fs = require("fs");

fs.readFile("test.txt", "utf8", 
    function (error, data) {
        console.log("Асинхронное чтение");
        if (error) throw err;
        console.log(data);
});

console.log("Cинхронное чтение");
console.log(fs.readFileSync("test.txt", "utf8"));
