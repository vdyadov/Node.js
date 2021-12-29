const fs = require("fs");

fs.readFile("test.txt", "utf8", 
    function (error, data) {
        console.log("Асинхронное чтение");
        if (error) throw err;
        console.log(data);
});

console.log("Cинхронное чтение");
console.log(fs.readFileSync("test.txt", "utf8"));

fs.writeFile("test1.txt", "Асинхронная запись\n", 
    function (error, data) {
        console.log("Асинхронная запись в файл. Содержимое файла");
        if (error) throw err;
        data = fs.readFileSync("test1.txt", "utf8");
        console.log(data);
});

console.log("Синхронная запись в файл. Содержимое файла");
fs.writeFileSync("test1.txt", "Синхронная запись\n");
console.log(fs.readFileSync("test1.txt", "utf8"));

fs.appendFile("test.txt", "Асинхронное дополнение\n", 
    function (error, data) {
        console.log("Асинхронное дополнение в файл. Содержимое файла");
        if (error) throw err;
        data = fs.readFileSync("test.txt", "utf8");
        console.log(data);
});

console.log("Синхронное дополнение в файл. Содержимое файла");
fs.appendFileSync("test.txt", "Синхронное дополнениe\n");
console.log(fs.readFileSync("test.txt", "utf8"));

