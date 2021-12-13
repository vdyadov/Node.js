let curDate = new Date();
module.exports.date = curDate;

module.exports.getMessage = function(name) {
    let hour = curDate.getHours();
    if (hour > 16)
        return "Добрый вечер, " + name;
    else if (hour > 10)
        return "Добрый день, " + name;
    else
        return "Доброе утро, " + name;
}