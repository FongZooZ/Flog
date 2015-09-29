var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  verified: Boolean
});

var User = mongoose.model('user', userSchema, "user");

module.exports = User;