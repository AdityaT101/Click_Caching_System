var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://AdityaT101:kale123@ds019966.mlab.com:19966/textmonkey1";
var Element = require('./Elements');

exports.Schema = function (counter, callback) {

    console.log( "Counter_Number :- " +counter )

    MongoClient.connect(url, function (err, db) {

        var input= []


        Element.Find1(counter, function(data1) {
            if(data1)
            {
                input.push(data1);

                Element.Find3(counter, function(data3) {
                    if(data3)
                    {
                        input.push(data3);


                        Element.Find6(counter, function(data6) {
                            if(data6)
                            {
                                input.push(data6);

                                
                                Element.Find12(counter, function(data12) {
                                    if(data12)
                                    {
                                        input.push(data12);


                                        Element.Find24(counter, function(data24) {
                                            if(data24)
                                            {
                                                input.push(data24);


                                                Element.FindAlltime(counter, function(dataAlltime) {
                                                    if(data24)
                                                    {
                                                        input.push(dataAlltime);
                                                       // console.log(input);
                                                        callback(input)

                                                    }

                                                });


                                            }

                                        });


                                    }

                                });

                            }

                        });


                    }

                });
            }
        });


    });


}
