var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TweetSchema = new Schema({

    tweet: {
        type: String,
        required: true
    },
    coordinates: {
        longitude: {
        type: Number,
        required: true
        },
        latitude: {
            type: Number,
            required: true
        }
}
});

module.exports = mongoose.model("Tweets", TweetSchema);