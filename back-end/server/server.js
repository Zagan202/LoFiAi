require('./config/config');

var _ = require('lodash');
var express = require('express'); 
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./models/comments');
var commentRoutes = require("./routes/comments");
var port = process.env.PORT;
var cors = require('cors');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://cmps115:lofiai@ds153869.mlab.com:53869/lofiai')
	.then(() => {
		console.log('Start');
	})
	.catch(err => {
		console.error('App starting error:', err.stack);
		process.exit(1);
	});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PATCH, POST, GET, DELETE')
  res.header("Access-Control-Allow-Headers", "Authorization, Content-Type, Access-Control-Allow-Origin, X-Requested-With, token");
  next();
});

app.use(commentRoutes);

// GET /hello
app.get('/hello', (req, res) => {
    res.status(200).send("Hello, World!");
})


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});