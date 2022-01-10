const express = require("express");
 
const app = express();

const prodRouter = express.Router();
 
prodRouter.use("/create", function (request, response) {
    response.send("Добавление товара");
});

prodRouter.use("/:id", function (request, response) {
    response.send(`Товар ${request.params.id}`);
});

prodRouter.use("/", function (request, response) {
    response.send("Список товаров");
});

app.use("/about", function (request, response) {
    response.send("О сайте");
});

app.use("/products", prodRouter);

app.use("/", function (request, response) {
    response.send("Главная страница");
});

app.listen(5000, () => console.log("Server started at 5000 port"));
