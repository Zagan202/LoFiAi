var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// database
//mongoose.connect('some mongodb', { useMongoClient: true } );


module.exports = {mongoose};