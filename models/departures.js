module.exports.list_all = function (req, res) {
    var arrivals = require("../departures.json");
    console.log (arrivals);
    res.send ("STATUS CODE: 200");
}

module.exports.search =  function (req, res) {
    var lodash = require("lodash");
    var departures = require("../departures.json");
    var pnr = req.params.pnr;
    var picked = lodash.filter(departuers, { 'pnr': pnr } );
    console.log (picked);
    res.send ("STATUS CODE: 200");
}