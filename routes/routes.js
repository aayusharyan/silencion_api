var appRouter = function (app) {

    app.get("/", require("../models/landing_page").main);
    app.get("/arrivals/", require("../models/arrivals").list_all);
    app.get("/departures/", require("../models/departures").list_all);
    app.get("/departures/:pnr", require("../models/departures").search);
    app.get("/offers/", require("../models/offers").list_all);
    app.get("/offers/:search_query", require("../models/offers").search);
    app.get("/notif_handler/:pnr", require("../models/notification").handle_notif);


}

module.exports = appRouter;
