module.exports.list_all = function (req, res) {
    var arrivals = require("../offers.json");
    res.send(JSON.stringify (arrivals));
}

module.exports.search = function (req, res) {
    var lodash = require("lodash");
    var offers = require("../offers.json");
    var search_query = req.params.search_query;
    console.log(search_query);
    console.log("Custom Search");
    
    var return_obj = [];
    
    console.log (offers);
    
    for (var index in offers) {
        var single_offer = offers[index];
        console.log (single_offer);
        console.log ("NEXT");
        if (((single_offer.name.toLowerCase().indexOf(search_query.toLowerCase())) > -1) || ((single_offer.tag.toLowerCase().indexOf(search_query.toLowerCase())) > -1)) {
            return_obj.push (single_offer);
        }
    }
    
    res.send (JSON.stringify(return_obj));
}
