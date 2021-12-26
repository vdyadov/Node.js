function display(data, callback) {
    var randNum = Math.random() * (10 - 1) + 1;
    var err = randNum > 5 ? new Error("Ошибка выполнения. randNum > 5") : null;

    setTimeout(function() {
        callback(err, data);
    }, 0);
}

console.log("Start programm!");

display("Checking data...", function (err, data) {
    if (err) throw err;
    console.log(data);
});

console.log("Stop programm!");
