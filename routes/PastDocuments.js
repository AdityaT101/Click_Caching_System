var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/textmonkey";
var Mongo = require('./MongoInsert');
var MongoCreate = require('./CreateStructure');
var SC = require('./SchemaOfDocument');
var DataInsert = require('./DataInsert');

exports.SaveRecords = function (req, res) {

    var counter = req.body.CounterNumber;

    MongoClient.connect(url, function (err, db) {

        var myquery = {_id: counter};
        db.collection("testtwo").find(myquery).count(function (err, result) {
            if (err) throw err;
            console.log(result);
            if(result > 0)
            {
                MongoCreate.UpdateStructure(counter, function (err) {
                    if (err) return console.log(err);
                    else console.log(" structure could not be created");
                });
            }
            else
            {
                MongoCreate.CreateStructure(counter, function (err) {
                    if (err) return console.log(err);
                    else console.log(" structure could not be created");
                });
            }
            db.close();
        })

     });

    DataInsert.InsertData(counter, function(data){
         if(data)
            {
                SC.Schema(counter, function (data) {
                    res.render('query', {CounterNumber: counter ,last1: data[0],last3: data[1],last6: data[2],last12: data[3],last24: data[4],lastAlltime: data[5]});
                });
            }
    });


   /* MongoClient.connect(url, function (err, db) {

     var myquery = {_id: counter};
     db.collection("testtwo").remove(myquery, function (err, res) {
     if (err) throw err;
     console.log(" table deleted");
     db.close();
     });

     //db.getCollection('testtwo').remove({_id:1})

     });*/
}



