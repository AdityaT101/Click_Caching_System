/**
 * Created by Aditya on 5/31/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://AdityaT101:kale123@ds019966.mlab.com:19966/textmonkey1";


exports.InsertData = function (counter, callback) {

    var count1 =0;
    var count2 =0;
    var count3 =0;
    var count4 =0;
    var count5 =0;
    var count6 =0;

    var input= [];

    MongoClient.connect(url, function (err, db) {

        var hours = null;
        var diffMins = 0;
        var query = {counter: counter};

        db.collection("text").find(query).toArray(function (err, result) {
            if (err) throw err;

            for (var i = 0; i <= result.length - 1; i++) {
                var EarlierTime = new Date(result[i].time);//----------------****---------------

               //console.log("length is :-" +result.length);
                var todayDate = new Date();

                var presentTime = new Date(todayDate.setHours(todayDate.getHours() - 7))//----------------****---------------

                //console.log(presentTime);
                var diffMs = (presentTime - EarlierTime);
                var diff = diffMs / 1000;
                var diff = Math.abs(Math.floor(diff));
                var years = Math.floor(diff / (365 * 24 * 60 * 60));
                var leftSec = diff - years * 365 * 24 * 60 * 60;
                var diffMins = Math.floor(leftSec / (60));

                if (diffMins <= 60) {
                    count1++;

                }

                if (diffMins <= 180) {
                    count2++;

                }

                if ( diffMins <= 360) {
                    count3++;

                }

                if (diffMins <= 720) {
                    count4++;

                }

                if ( diffMins <= 1440) {
                    count5++;

                }

                if (diffMins <= 24934836) {
                    count6++;


                }

                if(i==result.length - 1)
                {
                    input.push(count1);
                    input.push(count2);
                    input.push(count3);
                    input.push(count4);
                    input.push(count5);
                    input.push(count6);
                    callback(input);
                }

            }
            db.close();
        });


    });

}