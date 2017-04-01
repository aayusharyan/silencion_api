var appRouter = function (app) {

    app.get("/", require("../models/landing_page").main);
    app.get("/arrivals/", require("../models/arrivals").list_all);
    app.get("/departures/", require("../models/departures").list_all);

    /*
     ** Making this one Model as an Variable because it is used at many Places, and requiring it multiple times can increase load
     ** The Specific Models can be found in the folder of models, divided into two category, zoho and mailchimp, for the endpoints.
     ** zoho endpoint will receive Data from Zoho and mailChimp will receive Data from MailChimp...
     */
    /*var success = require("../models/success.js");


    //======START LANDING PAGE FUNCTIONS======//
    
    //====== END LANDING PAGE FUNCTIONS ======//


    //======    START ZOHO FUNCTIONS    ======//
    app.get("/zoho/update", success.main);
    app.post("/zoho/update", require("../models/zoho/recv_update.js").main);

    app.get("/zoho/new", success.main);
    app.post("/zoho/new", require("../models/zoho/recv_update.js").main);
    //======     END ZOHO FUNCTIONS     ======//


    //======  START MAILCHIMP FUNCTIONS ======//
    app.get("/mailchimp/create_merge_list", require("../models/mailchimp/create_merge_list.js").main);

    app.get("/mailchimp/create_webhooks", require("../models/mailchimp/create_webhooks.js").main);

    app.get("/mailchimp/unsub", success.main);
    app.post("/mailchimp/unsub", require("../models/mailchimp/recv_unsub.js").main);

    app.get("/mailchimp/update", success.main);
    app.post("/mailchimp/update", require("../models/mailchimp/recv_update.js").main);

    app.get("/mailchimp/sub", success.main);
    app.post("/mailchimp/sub", require("../models/mailchimp/recv_sub.js").main);
    //======   END MAILCHIMP FUNCTIONS  ======// */

}

module.exports = appRouter;
