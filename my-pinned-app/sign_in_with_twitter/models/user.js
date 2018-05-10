var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String,
  },

});

module.exports = mongoose.model('User', userSchema);
