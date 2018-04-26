var express = require("express");
var router = express.Router();
var Song = require("../models/songs"); // comment model

router.route("/get/song")
	.get(function(req, res) {
		// looks at our Songs Schema
		Song.find(function(err, songs) {
		if (err)
		res.send(err);
		// responds with a json object of our database songs.
		res.json(songs);
		});
	})
	// adds a new song to the database 
	.post(function(req, res) {
		var song = new Song();
		song.path = req.body.path;
		song.save(function(err) {
			if(err)
				res.send(err);
			res.json({ message: "Song successfully added!" });
		});
	});

module.exports = router;