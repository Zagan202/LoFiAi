var express = require("express");
var router = express.Router();
var Comment = require("../models/comments"); // comment model

router.route("/add/comment")
	// retrieve all comments from the database
	.get(function(req, res) {
		// looks at our Comment Schema
		Comment.find(function(err, comments) {
			if (err)
				res.status(400).send(err);
			// responds with a json object of our database comments.
			res.status(200).send(comments);
		}).catch((e) => {
    		res.status(400).send({message: e.message});
		});
	})
	// adds a new comment to the database 
	.post(function(req, res) {
		var comment = new Comment();
		comment.author = req.body.author;
		comment.text = req.body.text;
		comment.save(function(err) {
			if(err)
				res.status(400).send(err);
			res.status(200).send({ message: "Comment successfully added!" });
		}).catch((e) => {
    		res.status(400).send({message: e.message});
		});
	});

module.exports = router;