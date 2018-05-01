require('dotenv').config();
const express = require('express');
const express_session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const port = 5000;
const jsonParser = bodyParser.json();
var sess;

app.listen(port, () => console.log(`Server started on port ${port}`));

// Initialize session
app.use(express_session({secret: 'wtfevenisthis'}));

/*app.get('/', function(req, res){
    sess = req.session;
}); */

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
app.post('/', jsonParser, (req, res) => {
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

// Handles unknown routes
app.use(function (req, res, next) {
    res.status(404).send("Oops! I don't think this page exists..")
  });