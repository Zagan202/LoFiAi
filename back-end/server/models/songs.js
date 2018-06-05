// Links to mp3 files

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SongsSchema = new Schema ({path: String,});

module.exports = mongoose.model("Song", SongsSchema);