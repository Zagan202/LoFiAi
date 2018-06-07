// Back-end server

require('./config/config');

var _ = require('lodash');
// Needed for routing
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// All routes relating to songs
var songRoutes = require("./routes/songs");
var port = process.env.PORT;
// Middleware
var cors = require('cors');

mongoose.Promise = require('bluebird');
// Establishing connection to database
mongoose.connect("mongodb://cmps115:lofiai@ds153869.mlab.com:53869/lofiai")
  .then(() => {console.log("Start");})
  .catch(err => {
    console.error("App starting error:", err.stack);
    process.exit(1);
  });

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PATCH, POST, GET, DELETE")
  res.header("Access-Control-Allow-Headers", "Authorization, Content-Type, Access-Control-Allow-Origin, X-Requested-With, token");
  next();
});

app.use(express.static("./front-end/build/"));

app.use(songRoutes);

// Displays when running without front-end
app.get('/', (req, res) => {
  res.status(200).send("Hello, World!");
})


app.listen(port, () => {
  console.log("Started up at port " + port);
});