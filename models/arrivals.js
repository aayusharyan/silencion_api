module.exports.list_all = function (req, res) {
    var arrivals = require("../arrivals.json");
    console.log (arrivals);
    res.send ("STATUS CODE: 200");
}

module.exports.search =  function (req, res) {
    var lodash = require("lodash");
    var arrivals = require("../arrivals.json");
    var pnr = req.params.pnr;
    var picked = lodash.filter(arrivals, { 'pnr': pnr } );
    console.log (picked);
    res.send ("STATUS CODE: 200");
}