module.exports.handle_notif = function (req, res) {
    var lodash = require("lodash");
    var departures = require("../departures.json");
    var pnr = req.params.pnr;
    var picked = lodash.filter(departures, { 'pnr': pnr } );
    console.log (picked);
    res.send ("STATUS CODE: 200");
}