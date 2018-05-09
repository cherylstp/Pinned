var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MapSchema = new Schema({
 
    tripName: {
        type: String,
        required: true
    },

    tweet: [
        {
            username: {
                type: String,
                required: true

            },
            tweet_id: {
                type: String
            },
            date_time: {
                type: Date
            },
            entities: {
                media: [
                    {
                        expanded_url: String,


                        media_url: String

                    }
                ]

            },
            text: {
                type: String,
                required: true

            },
            coordinates: {
                coordinates: [Number, Number]
            }

        }
    ],
    descrption: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model("MapSchema", MapSchema, "UniqueMap");