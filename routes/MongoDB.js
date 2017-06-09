/**
 * Created by Aditya on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://AdityaT101:kale123@ds019966.mlab.com:19966/textmonkey1";
var Mongo = require('./MongoInsert');

exports.SaveRecords = function (No_Records, object, callback) {

    //the object received here is an array of objects,
    // hence we loop through each object to retrieve the fields and insert them in MongoDB Database.
    MongoClient.connect(url, function (err, db) {
        for (var i = 0; i <= No_Records - 1; i++) {
            var y = object[i].replace(/[{}]/g, "");
            var field = y.split(',');
            var counter = field[0].toString();
            var countNumber = field[1];
            var timestamp = new Date(field[2]);//the timestamp field is inserted as a date object in MongoDB.


            if (!err) {
                db.collection('text').insertOne(
                    {
                        counter: counter,
                        time: timestamp,
                        countNumber: countNumber
                    },
                    function (err1) {
                        if (err1) throw err1;
                        console.log("1 record inserted");
                        db.close();
                    });

            }
            else
                console.log(err);
        }

    });

}