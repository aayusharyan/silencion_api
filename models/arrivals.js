module.exports.list_all = function (req, res) {
    var arrivals = require("../arrivals.json");
    res.send(JSON.stringify(arrivals));
}

module.exports.search = function (req, res) {
    var lodash = require("lodash");
    var arrivals = require("../arrivals.json");
    var pnr = req.params.pnr;
    var picked = lodash.filter(arrivals, {
        'pnr': pnr
    });
    res.send(JSON.stringify(picked));
}

module.exports.add_new = function (req, res) {
    var arrivals = require("../arrivals.json");
    var data = req.body;

    var count_of_items = arrivals.length();
    var new_arrivals_listing = {};
    new_arrival_listing.id = ++count_of_items;
    new_arrival_listing.source = data.source;
    new_arrival_listing.destination = data.destination;
    new_arrival_listing.company = company;
    new_arrival_listing.logo = data.logo;
    new_arrival_listing.gate = data.gate;
    new_arrival_listing.eta = data.eta;
    new_arrival_listing.delay = data.delay;
    new_arrival_listing.comments = data.comments;

    arrivals.push(new_arrivals_listing);


    jsonfile = require('jsonfile');
    jsonfile.writeFile('arrivals.json', arrivals, function (err) {
        if (err) return console.log(err);
    });


}
