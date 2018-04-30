
var mongoClient = require('mongodb').MongoClient;
var bcrypt = require('bcrypt');
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;

// Register: Add a new user to the database
exports.registerUser = function(name, email, username, password){
    var uri = "mongodb+srv://" + mongoUsername + ":" + mongoPassword + "@pinned-dvbij.mongodb.net/PinnedData";
    mongoClient.connect(uri, function(err, db){
        if(err){
            throw err;
        }

        var userCollection = db.db('PinnedData').collection('users');
        var newUserDocument = {
            "name" : name,
            "email" : email,
            "username" : username,
            "password" : password
        }

        bcrypt.hash(newUserDocument.password, 10, function(err, hash){
            newUserDocument.password = hash;
            userCollection.insertOne(newUserDocument, function(err, res){
                if(err){
                    throw err;
                }
                console.log("New customer inserted");
                db.close();
            });
        });
    });
}

// User login. When user is logged in, redirect to home page
function userLogin(email, password){
    var uri = "mongodb+srv://" + mongoUsername + ":" + mongoPassword + "@pinned-dvbij.mongodb.net/PinnedData";
    var isLoggedIn = false;

        function connect() {
        mongoClient.connect(uri, function(err, db){
        if(err){
            throw err;
        }
        var userCollection = db.db('PinnedData').collection('users');
        userCollection.find({ email: email }).limit(1).next(function(err, result){
            if(err){
                throw err;
                isLoggedIn = false;
            }
            if(result){
                bcrypt.compare(password, result.password, function(err, res){
                    if(err){
                        throw err;
                    }
                    if(res) {
                        console.log("match!");
                        isLoggedIn = true;
                                              
                    } else {
                        console.log("don't match");
                        isLoggedIn = false;
                    } 
                    console.log("From bcrypt function, isLoggedIn: " +isLoggedIn);
                    //return isLoggedIn;
                });
                db.close(); 
            }
            else{
                console.log("No user with that email / password combination.");
                db.close();
                isLoggedIn = false;
                console.log("Outside of bcrypt functon in else: " + isLoggedIn);
            }
        })
    });
    console.log("At end of connect: " + isLoggedIn);   
}
    //return isLoggedIn; 
    return connect();
}

module.exports.userLogin = userLogin;