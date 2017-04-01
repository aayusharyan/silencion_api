module.exports.list_all = function (req, res) {
    var arrivals = require("../offers.json");
    console.log (arrivals);
    res.send ("ERROR CODE: 200");
}