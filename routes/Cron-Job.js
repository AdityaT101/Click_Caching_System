/**
 * Created by Aditya on 5/27/2017.
 */
var redis = require('redis');
var client = redis.createClient();
var cron = require('node-cron');
var Mongo = require('./MongoDB');

exports.start = function (p1) {

    var p5 = 0;

    //used to retrieve the count of values associated with the key. To find the number of elements associated with the key.
    client.llen(p1, function (err, object) {
        p5 = object.toString();
    });

    //used to retrieve the values based 
    client.lrange(p1, 0, -1, function (err, object) {
        Mongo.SaveRecords(p5, object, function (err) {
            if (err) return console.log(err);
            else console.log("data Sent to MongoDB");
        });
    });

    //clear the cacche associated with that key.
    client.del(p1, function (err, object) {
        if (err) return console.log("problem while deleting");

    });

};


