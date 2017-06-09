var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://AdityaT101:kale123@ds019966.mlab.com:19966/textmonkey1";

var Mongo = require('./MongoInsert');
var MongoCreate = require('./CreateStructure');
var SC = require('./SchemaOfDocument');

exports.InsertData = function (counter, callback) {

    MongoClient.connect(url, function (err, db) {

        var hours = null;
        var diffMins = 0;
        var query = {counter: counter};

        db.collection("text").find(query).toArray(function (err, result) {
            if (err) throw err;

            for (var i = 0; i <= result.length - 1; i++) {
                var EarlierTime = new Date(result[i].time);//----------------****---------------
                console.log(EarlierTime);
                var todayDate = new Date();
                var presentTime = new Date(todayDate.setHours(todayDate.getHours() - 7))//----------------****---------------
                console.log(presentTime);

                var diffMs = (presentTime - EarlierTime);
                var diff = diffMs / 1000;
                var diff = Math.abs(Math.floor(diff));
                var years = Math.floor(diff / (365 * 24 * 60 * 60));
                var leftSec = diff - years * 365 * 24 * 60 * 60;
                var diffMins = Math.floor(leftSec / (60));
                console.log(diffMins);
                Mongo.Insert(counter, diffMins, function (err) {
                    if (err) return console.log(err);
                    else console.log(" data Sent to MongoDB");
                });

                if(i == (result.length - 1) )
                {
                    setTimeout(function () {
                        var a = 1;
                        callback(a);
                    }, 1000);
                }
            }

        });

    });

}