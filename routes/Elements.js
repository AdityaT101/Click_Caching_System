/**
 * Created by Aditya on 5/30/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/textmonkey";
var MongoCreate = require('./CreateStructure');

exports.Find1 = function (counter, callback){

    MongoClient.connect(url, function (err, db) {

        var myquery = {_id: counter};
        var newvalues = {"hours.1.count":1, _id: 0};

        db.collection("testtwo").find( myquery, newvalues ).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["1"]["count"];
            console.log("Past Hour :-    "+answer);

            callback(answer);
        });
    });
}


exports.Find3 = function (counter, callback){

    MongoClient.connect(url, function (err, db) {

        var myquery = {_id: counter};
        var newvalues3 = {"hours.3.count":1, _id: 0};
        db.collection("testtwo").find( myquery, newvalues3 ).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["3"]["count"];
            console.log("Past 3 Hours :-    "+answer);
            // res.render('query', {CounterNumber: answer});
            callback(answer);

        });
    });
}


exports.Find6 = function (counter, callback){

    MongoClient.connect(url, function (err, db) {

        var myquery = {_id: counter};
        var newvalues6 = {"hours.6.count":1, _id: 0};
        db.collection("testtwo").find( myquery, newvalues6 ).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["6"]["count"];
            console.log("Past 6 Hours :-    "+answer);
            callback(answer);

        });
    });
}


exports.Find12 = function (counter, callback){

    MongoClient.connect(url, function (err, db) {

        var myquery = {_id: counter};
        var newvalues12 = {"hours.12.count":1, _id: 0};
        db.collection("testtwo").find( myquery, newvalues12 ).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["12"]["count"];
            console.log("Past 12 Hours :-    "+answer);
            callback(answer);
        });
    });
}


exports.Find24 = function (counter, callback){

    MongoClient.connect(url, function (err, db) {

        var myquery = {_id: counter};
        var newvalues24 = {"hours.24.count":1, _id: 0};
        db.collection("testtwo").find( myquery, newvalues24 ).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["24"]["count"];
            console.log("Past 24 Hours :-    "+answer);
            callback(answer);
        });
    });
}


exports.FindAlltime = function (counter, callback){

    MongoClient.connect(url, function (err, db) {

        var myquery = {_id: counter};
        var newvaluesAlltime = {"hours.Alltime.count":1, _id: 0};
        db.collection("testtwo").find( myquery, newvaluesAlltime).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["Alltime"]["count"];
            console.log("Alltime :-    "+answer);
            callback(answer);
        });
    });
}