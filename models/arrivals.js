module.exports.list_all = function (req, res) {
    var arrivals = require("../arrivals.json");
    console.log (arrivals);
    res.send ("STATUS CODE: 200");
}