var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var counter = require('./routes/counter');
var redis1 = require('./routes/redis');
var cron = require('node-cron');
var redis = require('redis');
var client = redis.createClient();
var cronObject = require('./routes/Cron-Job');
var server = require('./routes/server');
var PastDocuments = require('./routes/PastDocuments');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.post('/setCount', redis1.RedisInsert);
app.get('/counter', counter.InsertCount);


//Run a CRON job after every specific time. This cron shall get all the values associated with the key
cron.schedule('*/10 * * * * *', function () {
  console.log('running a task every 10 secs');

    client.keys('*', function (err, keys) {//fetching the values associated with the key.
        if (err) return console.log(err);
       for (var i = 0, len = keys.length; i < len; i++) {
            cronObject.start(keys[i]);
        }
    });

});

app.get('/FindResults',server.find);
app.post('/query', PastDocuments.SaveRecords);

module.exports = app;
