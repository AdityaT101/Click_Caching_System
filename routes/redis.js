/**
 * Created by Aditya on 5/25/2017.
 */
var client = require('redis').createClient(6379, 'version1.7m5dyg.ng.0001.use2.cache.amazonaws.com', {no_ready_check: true})
var cron = require('./Cron-Job');

exports.RedisInsert = function (req, res) {

    //the data is received on server side.It is further unpacked, and inserted in redis
    var p1 = req.body[0].data1;
    var p2 = req.body[0].data2;
    var p3 = req.body[0].data3;

    //the data is arranged to be sent to redis
    var p4 = "{"+p1+","+p2+","+p3+"}";


    //The data is pushed into redis. We are using list to store the data.
    client.rpush(p1, p4, function (err, reply) {//p1 is the counter number, p4 is the data
        if (err) {
            res.status(400).send("bad request");
            console.log(err);
        }
        else {
            res.status(200).send("good request");
            console.log(reply);
        }

    });

    
}