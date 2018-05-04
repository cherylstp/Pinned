var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TweetSchema = new Schema({
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
    entities : {   
        media : [
            {
            expanded_url : String,
            

            media_url :   String
                
            }   
    ]
    
    },
    text: {
        type: String,
        required: true
        
    },
    coordinates : {
        coordinates : [Number, Number]
    }
    



});

module.exports = mongoose.model("UserTweets", TweetSchema, "LocationAndPictures");