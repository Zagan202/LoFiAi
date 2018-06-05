// Routing functions related to the song model

var express = require('express');
var router = express.Router();
var Song = require('../models/songs');

router.route("/get/song")
  .get(function(req, res) {
    // Looks at our Songs Schema
    Song.find(function(err, songs) {
      if (err)
        res.send(err);
	  
    // Set response status to 200 if successful
	  // 400 if there is an error
	  // Sends array of all songs
      res.status(200).send(songs);
    });
  })

  // Adds a new song to the database 
  .post(function(req, res) {
    var song = new Song();
    song.path = req.body.path;
    song.save(function(err) {
      if(err)
        res.status(400).send(err);
      res.status(200).send({ message: "Song successfully added!" });
    });
  });

module.exports = router;