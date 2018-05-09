require('dotenv').config();
var mongoose = require("mongoose");

var dbURL = process.env.dbURL;
var options = {
    reconnectTries: Number.MIN_VALUE,
    poolSize: 10
};

mongoose.connect(dbURL, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting database due to:", err);
    }
);

require("../models/Location");
require("../models/TweetData");
require("../models/UniqueMap");