const express = require("express");
 
const app = express();


const urlencodedParser = express.urlencoded({extended: false});

app.get("/categories/:catId/products/:prodId", function(request, response) {
    let catId = request.params["catId"];
    let prodId = request.params["prodId"];
    response.send(`Категория: ${catId}  Товар: ${prodId}`);
});

app.listen(5000, () => console.log("Server started at 5000 port"));
