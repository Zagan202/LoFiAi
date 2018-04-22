var express = require("express");
var router = express.Router();
var Comment = require("../models/comments");

router.route("/add/comment")
	//retrieve all comments from the database
	.get(function(req, res) {
		//looks at our Comment Schema
		Comment.find(function(err, comments) {
		if (err)
		res.send(err);
		//responds with a json object of our database comments.
		res.json(comments);
		});
	})

	.post(function(req, res) {
		var comment = new Comment();
		comment.author = req.body.author;
		comment.text = req.body.text;
		comment.save(function(err) {
			if(err)
				res.send(err);
			res.json({ message: "Comment successfully added!" });
		});
	});

module.exports = router;