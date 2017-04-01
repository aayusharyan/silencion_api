module.exports.list_all = function (req, res) {
    var arrivals = require("../departures.json");
    console.log (arrivals);
    res.send ("STATUS CODE: 200");
}

module.exports.search =  function (req, res) {
    var lodash = require("lodash");
    var departures = require("../departures.json");
    var pnr_list = require("../pnr.json");
    var pnr = req.params.pnr;
    var picked = lodash.filter(pnr_list, { 'pnr': pnr } );
    var flight_id = picked[0].flight_id;
    var flight_details = lodash.filter(departures, {'id': flight_id});
    var single_flight_details_obj = flight_details[0];
    var result_object = {};
    result_object.id = single_flight_details_obj.id;
    result_object.source = single_flight_details_obj.source;
    result_object.destination = single_flight_details_obj.destination;
    result_object.seat = single_flight_details_obj.seat;
    result_object.company = single_flight_details_obj.company;
    result_object.seat = single_flight_details_obj.seat;
    result_object.company = single_flight_details_obj.company;
    result_object.logo = single_flight_details_obj.logo;
    result_object.flightNo = single_flight_details_obj.flightNo;
    result_object.pnr = pnr;
    result_object.gate = single_flight_details_obj.gate;
    result_object.eta = single_flight_details_obj.eta;
    result_object.delay = single_flight_details_obj.delay;
    result_object.comments = single_flight_details_obj.comments;
    console.log (picked);
    console.log (flight_id);
    console.log (flight_details);
    res.send ("STATUS CODE: 200");
}