require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const Promise = require('bluebird');

let { mongoose } = require('./db/mongoose');

let app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PATCH, POST, GET, DELETE')
  res.header("Access-Control-Allow-Headers", "Authorization, Content-Type, Access-Control-Allow-Origin, X-Requested-With, token");
  next();
});

// GET /hello
app.get('/hello', (req, res) => {
    res.status(200).send("Hello, World!");
})


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = { app };