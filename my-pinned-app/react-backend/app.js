var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bodyParser = require("body-parser");
const db = require('./config/database');
const express_session = require('express-session');
const jsonParser = bodyParser.json();
var sess;
require('dotenv').config();

//controllers 
var locationController = require("./controllers/controller.js");
var tweetController = require("./controllers/TweetController.js");
var MapController= require("./controllers/MapController.js");

//db instance connection
require("./config/db");

//this opens the server at port 3001
var app = express();
var port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})

// API ENDPOINTS

app
  .route("/location")
  .get(locationController.listAllLocation)
  .post(locationController.createNewLocation);

app
  .route("/location/:locid")
  .get(locationController.readLocation)
  .put(locationController.updateLocation)
  .delete(locationController.deleteLocation);

app
  .route("/tweet")
  .get(tweetController.listAllTweets)
  .post(tweetController.createNewTweet);

app
  .route("/tweet/:tweetid")
  .get(tweetController.readTweet)
  .put(tweetController.updateTweet)
  .delete(tweetController.deleteTweet);

  
  app
  .route("/map")
  .get(MapController.listAllMap)
  .post(MapController.createNewMap);

// Handles the post request to register a new user
app.post('/Register', jsonParser, (req, res) => {
  const user = {
      "name": req.body.name,
      "email": req.body.email,
      "username": req.body.username,
      "password": req.body.password
  }
  db.registerUser(user.name, user.email, user.username, user.password);
  res.send(user);
});

// Handles a user logging into application
app.post('/Login', jsonParser, (req, res) => {
  const user = {
      "email": req.body.email,
      "password": req.body.password
  }
  var isLoggedIn = db.userLogin(user.email, user.password);
  console.log("isLoggedin: " + isLoggedIn);
  if(isLoggedIn){
      // Assign session var to email upon success
      sess = req.session;
     // console.log(sess);
      sess.email = req.body.email;
      console.log("session email: " + sess.email);
  }
  else{
      // Do not log in
  }
 // res.redirect('/Home');
  res.send(user);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
