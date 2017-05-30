var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/textmonkey";
var Mongo = require('./MongoInsert');
var MongoCreate = require('./CreateStructure');
var SC = require('./SchemaOfDocument');

exports.SaveRecords = function (req, res) {

    var counter = req.body.CounterNumber;

    MongoCreate.CreateStructure(counter, function (err) {
        if (err) return console.log(err);
        else console.log(" structure could not be created");
    });

    MongoClient.connect(url, function (err, db) {

        var hours = null;
        var diffMins = 0;
        var query = {counter: counter};

        db.collection("text").find(query).toArray(function (err, result) {
            if (err) throw err;

            for (var i = 0; i <= result.length - 1; i++) {
                var EarlierTime = new Date(result[i].time);//----------------****---------------

                //console.log(EarlierTime);
                var todayDate = new Date();

                var presentTime = new Date(todayDate.setHours(todayDate.getHours() - 7))//----------------****---------------

                //console.log(presentTime);
                var diffMs = (presentTime - EarlierTime);
                var diff = diffMs / 1000;
                var diff = Math.abs(Math.floor(diff));
                var years = Math.floor(diff / (365 * 24 * 60 * 60));
                var leftSec = diff - years * 365 * 24 * 60 * 60;
                var diffMins = Math.floor(leftSec / (60));

                Mongo.Insert(counter, diffMins, function (err) {
                    if (err) return console.log(err);
                    else console.log(" data Sent to MongoDB");
                });
            }

        });

    });

    setTimeout(function () {
        SC.Schema(counter, function (err,callback1) {
            if (err) return console.log(err);
            else console.log(callback1);

        });
    }, 5000);

    res.render('query', {CounterNumber: "123", password1:"aditya"});

   /* MongoClient.connect(url, function (err, db) {

     var myquery = {_id: counter};
     db.collection("testtwo").remove(myquery, function (err, res) {
     if (err) throw err;
     console.log(" table deleted");
     db.close();
     });

     //db.getCollection('testtwo').remove({_id:1})

     });*/

   /* MongoClient.connect(url, function (err, db) {
           var myquery = {_id: counter};
           console.log("answer");
            var newvalues = {"hours.1.count":1, _id: 0};
            db.collection("testtwo").find( myquery, newvalues ).toArray(function (err, result) {
                if (err) throw err;
                var json = result[0].hours;
                  answer = json["1"]["count"];
                 console.log(answer);
           //    res.render('query', {CounterNumber: answer});
                db.close();

            });



        var newvalues3 = {"hours.3.count":1, _id: 0};
        db.collection("testtwo").find( myquery, newvalues3 ).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["3"]["count"];
            console.log(answer);
            // res.render('query', {CounterNumber: answer});
            db.close();

        });

    });*/
}



