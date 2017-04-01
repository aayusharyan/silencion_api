module.exports.list_all = function (req, res) {
    var arrivals = require("../offers.json");
    console.log(arrivals);
    res.send("STATUS CODE: 200");
}

module.exports.search = function (req, res) {
    var lodash = require ("lodash");
    var offers = require("../offers.json");
    console.log (offers);
    var search_query = req.params.search_query;
    console.log(search_query);
    console.log("Custom Search");
    var search_query_regex = "/"+search_query+"/i";
    console.log (search_query);

    var picked = lodash.filter(offers, {
        'name': ("/"+search_query+"/i").toString ()
    });


    console.log(picked);

    res.send("STATUS CODE: 200");
}
