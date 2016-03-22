var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
  firstName: String,
  lastName: String,
  organization: String,
  email: String
});

module.exports = mongoose.model('Contact', contactSchema);
