module.exports.list_all = function (req, res) {
    var arrivals = require("../arrivals.json");
    console.log (arrivals);
    res.send ("STATUS CODE: 200");
<<<<<<< HEAD
}

module.exports.search =  function (req, res) {
    var lodash = require("lodash");
    var arrivals = require("../arrivals.json");
    var pnr = req.params.pnr;
    var picked = lodash.filter(arrivals, { 'pnr': pnr } );
    console.log (picked.id==1);
    res.send ("STATUS CODE: 200");
=======
>>>>>>> 8fccf1eb394f8f06ea934f60b92e915ffd55464f
}