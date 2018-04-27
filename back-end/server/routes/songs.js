var express = require("express");
var router = express.Router();
var Song = require("../models/songs"); // comment model
var RandomStack = require("../RandomStack");

router.route("/get/song")
	.get(function(req, res) {
		// looks at our Songs Schema
		Song.find(function(err, songs) {
			if (err)
			res.send(err);

			let stack = new RandomStack();
			console.log(songs);
			// 1) stack.push(songs);
			// 2)stack.randomize() or whatever function is used to randomize
			// 3) convert the stack of random songs into a JSON object or array?

			// responds with a json object of our database songs.
			res.json(songs); // 4) <--- Send the list of random songs
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