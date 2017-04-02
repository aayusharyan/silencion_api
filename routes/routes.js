var appRouter = function (app) {

    app.post("/arrivals/", require("../models/arrivals").add_new);
    app.get("/", require("../models/landing_page").main);
    app.get("/arrivals/", require("../models/arrivals").list_all);
    
    app.post("/departures/", require("../models/departures").add_new);
    app.get("/departures/", require("../models/departures").list_all);
    app.get("/departures/:query", require("../models/departures").search);
    
    app.post("/offers/", require("../models/offers").add_new);
    app.get("/offers/", require("../models/offers").list_all);
    app.get("/offers/:search_query", require("../models/offers").search);
    
    app.get("/notif_handler/:pnr", require("../models/notification").handle_notif);    
    app.post("/notif_handler/", require("../models/notification").real_time);
    app.get("/notif_handler/", require("../models/notification").list_all);


}

module.exports = appRouter;
