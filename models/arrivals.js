module.exports.list_all = function (req, res) {
    var arrivals = require("../arrivals.json");
    res.send (JSON.stringify (arrivals));
}

module.exports.search =  function (req, res) {
    var lodash = require("lodash");
    var arrivals = require("../arrivals.json");
    var pnr = req.params.pnr;
    var picked = lodash.filter(arrivals, { 'pnr': pnr } );
    res.send (JSON.stringify (picked));
}