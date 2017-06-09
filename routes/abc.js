/**
 * Created by Aditya on 6/8/2017.
 */
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://AdityaT101:kale123@ds019966.mlab.com:19966/textmonkey1";

MongoClient.connect(url, function (err, db) {

    var counter = "1";
    var query = {counter: counter};
    if (err) throw err;
    db.collection("text").find(query).toArray(function (err, result) {
       console.log(result[0].time);
    });

    function abc(err) {
        if (!err)
            console.log("abc");
    }
});


