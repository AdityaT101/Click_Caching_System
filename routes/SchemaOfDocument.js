var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/textmonkey";

exports.Schema = function (counter, callback) {

    MongoClient.connect(url, function (err, db) {
        var input = [];
        var myquery = {_id: counter};
       // console.log("answer");
        var newvalues = {"hours.1.count":1, _id: 0};
        db.collection("testtwo").find( myquery, newvalues ).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["1"]["count"];
            console.log(answer);
            input.push(answer);

            //    res.render('query', {CounterNumber: answer});

        });



        var newvalues3 = {"hours.3.count":1, _id: 0};
        db.collection("testtwo").find( myquery, newvalues3 ).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
       //     answer = json["3"]["count"];
            console.log(answer);
            // res.render('query', {CounterNumber: answer});
            input.push(answer);

        });

        var newvalues6 = {"hours.6.count":1, _id: 0};
        db.collection("testtwo").find( myquery, newvalues6 ).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["6"]["count"];
            console.log(answer);
            // res.render('query', {"hours.6.count": answer});
            input.push(answer);

        });

        var newvalues12 = {"hours.12.count":1, _id: 0};
        db.collection("testtwo").find( myquery, newvalues12 ).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["12"]["count"];
            console.log(answer);
            //  res.render('query', {"hours.12.count": answer});
            input.push(answer);


        });

        var newvalues24 = {"hours.24.count":1, _id: 0};
        db.collection("testtwo").find( myquery, newvalues24 ).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["24"]["count"];
            console.log(answer);
            //   res.render('query', {"hours.24.count": answer});
            input.push(answer);

        });

        var newvaluesAlltime = {"hours.Alltime.count":1, _id: 0};

        db.collection("testtwo").find( myquery, newvaluesAlltime).toArray(function (err, result) {
            if (err) throw err;
            var json = result[0].hours;
            answer = json["Alltime"]["count"];
            console.log(answer);
            // res.render('query', {"hours.Alltime.count": answer});
                  input.push(answer);


        });

        //db.testtwo.find({_id: "2"},{"hours.1.count":1,_id: 0})
        console.log(input[0]);

    });


}
