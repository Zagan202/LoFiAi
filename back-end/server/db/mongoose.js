// Setup mongoose

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = {mongoose};