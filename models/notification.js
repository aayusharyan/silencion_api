module.exports.handle_notif = function (req, res) {
    var lodash = require("lodash");
    var departures = require("../pnr.json");
    var dep_lists = require("../departures.json");
    var pnr = req.params.pnr;
    var picked = lodash.filter(departures, { 'pnr': pnr } );
    var flight_id = picked[0].flight_id;
    var flight_object = lodash.filter(dep_lists, {'id': flight_id});
    
    var dep_time = flight_object[0].eta;
    var temp_time = dep_time-20;
    var temp1_time = dep_time-45;
    var temp2_time = dep_time-90;
    
    
    var notifs = [{
        "notif_time": temp_time,
        "notif_text": "Boarding Gates are Closing soon"
    }, {
        "notif_time": temp1_time,
        "notif_text": "Your flight is Currently Boarding"
    }, {
        "notif_time": temp2_time,
        "notif_text": "Secutiry Check-In for your flight has started Started"
    }];
    
    res.send (JSON.stringify (notifs));
    
}