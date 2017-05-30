var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/textmonkey";
var MongoCreate = require('./CreateStructure');

exports.Insert = function (counter,diffMins, callback) {
    MongoClient.connect(url, function (err, db) {
        if (diffMins <= 60) {
            // hours = "1"
            var myquery = {_id: counter};
            var newvalues = {$inc: {"hours.1.count": 1}};
            db.collection("testtwo").update(myquery, newvalues, function (err, res) {
                if (err) throw err;
                //console.log(res.result.nModified + " record updated");
                db.close();
            });

        }

        if (diffMins <= 180) {
            // hours = "3"
            var myquery = {_id: counter};
            var newvalues = {$inc: {"hours.3.count": 1}};
            db.collection("testtwo").update(myquery, newvalues, function (err, res) {
                if (err) throw err;
                //console.log(res.result.nModified + " record updated");
                db.close();
            });

        }

        if ( diffMins <= 360) {
            // hours = "6"
            var myquery = {_id: counter};
            var newvalues = {$inc: {"hours.6.count": 1}};
            db.collection("testtwo").update(myquery, newvalues, function (err, res) {
                if (err) throw err;
                //console.log(res.result.nModified + " record updated");
                db.close();
            });

        }

         if (diffMins <= 720) {
            // hours = "12"
            var myquery = {_id: counter};
            var newvalues = {$inc: {"hours.12.count": 1}};
            db.collection("testtwo").update(myquery, newvalues, function (err, res) {
                if (err) throw err;
                //console.log(res.result.nModified + " record updated");
                db.close();
            });

        }

         if ( diffMins <= 1440) {
            // hours = "24"
            var myquery = {_id: counter};
            var newvalues = {$inc: {"hours.24.count": 1}};
            db.collection("testtwo").update(myquery, newvalues, function (err, res) {
                if (err) throw err;
                //console.log(res.result.nModified + " record updated");
                db.close();
            });

        }

         if (diffMins <= 24934836) {
            // hours = "Alltime"
            var myquery = {_id: counter};
            var newvalues = {$inc: {"hours.Alltime.count": 1}};
            db.collection("testtwo").update(myquery, newvalues, function (err, res) {
                if (err) throw err;
                //console.log(res.result.nModified + " record updated");
                db.close();
            });
        }


    });
}