/**
 * Created by Aditya on 5/29/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/textmonkey";
var MongoCreate = require('./CreateStructure');

exports.CreateStructure = function (counter, callback) {

      MongoClient.connect(url, function (err, db) {
            if (!err) {
              
                 db.collection('testtwo').insertOne(
                        {
                            "_id": counter,
                            "hours": {
                                "1": {
                                    "count": 0
                                },
                                "3": {
                                    "count": 0
                                },
                                "6": {
                                    "count": 0
                                },
                                "12": {
                                    "count": 0
                                },
                                "24": {
                                    "count": 0
                                },
                                "Alltime": {
                                    "count": 0
                                }
                            }
                        },

                        function (err2) {
                            if (err2) throw err2;
                            console.log("structure made ");

                        });
                
            }
            else
                console.log(err);
        });


    }

exports.UpdateStructure = function (counter, callback) {

    MongoClient.connect(url, function (err, db) {
        if (!err) {
            

            db.collection('testtwo').update(
                {"_id": counter},

                { "hours": {
                        "1": {"count": 0},
                        "3": {"count": 0},
                        "6": {"count": 0},
                        "12": {"count": 0},
                        "24": {"count": 0},
                        "Alltime": {"count": 0}
                    }},

                { upsert: true },

                function (err2) {
                    if (err2) throw err2;
                    console.log("structure updated ");

                });

        }
        else
            console.log(err);
    });


}