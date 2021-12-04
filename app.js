var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

console.log("Starting Arctic Fox");
console.log("DB: " + "10.217.5.234:27017");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const uri = 'mongodb://10.217.5.234:27017';
//const uri = process.env.MONGO_DB;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;