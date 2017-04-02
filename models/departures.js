module.exports.list_all = function (req, res) {
    var arrivals = require("../departures.json");
    res.send(JSON.stringify(arrivals));
}

module.exports.search = function (req, res) {
    var lodash = require("lodash");
    var departures = require("../departures.json");
    var pnr_list = require("../pnr.json");
    var search_query = req.params.query;
    var picked = lodash.filter(pnr_list, {
        'pnr': search_query
    });
    if (picked.length == 1) && (typeof (picked[0].flight_id) !== 'undefined') {
        var flight_id = picked[0].flight_id;
        var flight_details = lodash.filter(departures, {
            'id': flight_id
        });
        var single_flight_details_obj = flight_details[0];

        var airports = require("../locations.json");
        var airports_loc = lodash.filter(airports, {
            'code': single_flight_details_obj.destination
        });
        var dest_long = airports_loc[0].long;
        var dest_lat = airports_loc[0].lat;


        var result_object = {};
        result_object.id = single_flight_details_obj.id;
        result_object.source = single_flight_details_obj.source;
        result_object.destination = single_flight_details_obj.destination;
        result_object.dest_lat = dest_lat;
        result_object.dest_long = dest_long;
        result_object.seat = single_flight_details_obj.seat;
        result_object.company = single_flight_details_obj.company;
        result_object.seat = single_flight_details_obj.seat;
        result_object.company = single_flight_details_obj.company;
        result_object.logo = single_flight_details_obj.logo;
        result_object.flightNo = single_flight_details_obj.flightNo;
        result_object.pnr = search_query;
        result_object.gate = single_flight_details_obj.gate;
        result_object.eta = single_flight_details_obj.eta;
        result_object.delay = single_flight_details_obj.delay;
        result_object.comments = single_flight_details_obj.comments;
        res.send(JSON.stringify(result_object));
    } else if (picked.length == 0) {


        var flight_details = lodash.filter(departures, {
            'flightNo': search_query.toUpperCase()
        });
        if (flight_details.length == 1) {


        var single_flight_details_obj = flight_details[0];

        var airports = require("../locations.json");
        var airports_loc = lodash.filter(airports, {
            'code': single_flight_details_obj.destination
        });
        var dest_long = airports_loc[0].long;
        var dest_lat = airports_loc[0].lat;


        var result_object = {};
        result_object.id = single_flight_details_obj.id;
        result_object.source = single_flight_details_obj.source;
        result_object.destination = single_flight_details_obj.destination;
        result_object.dest_lat = dest_lat;
        result_object.dest_long = dest_long;
        result_object.company = single_flight_details_obj.company;
        result_object.logo = single_flight_details_obj.logo;
        result_object.flightNo = single_flight_details_obj.flightNo;
        result_object.gate = single_flight_details_obj.gate;
        result_object.eta = single_flight_details_obj.eta;
        result_object.delay = single_flight_details_obj.delay;
        result_object.comments = single_flight_details_obj.comments;
        res.send(JSON.stringify(result_object));
        } else {
            res.sendStatus (404);
        }
    }


}
