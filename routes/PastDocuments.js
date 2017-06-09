
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://AdityaT101:kale123@ds019966.mlab.com:19966/textmonkey1";

var DataInsert = require('./DataInsert');

exports.SaveRecords = function (req, res) {

    var counter = req.body.CounterNumber;


    DataInsert.InsertData(counter, function(data){
         if(data)
            {
             res.render('query', {CounterNumber: counter ,last1: data[0],last3: data[1],last6: data[2],last12: data[3],last24: data[4],lastAlltime: data[5]});
            }
    });


}



