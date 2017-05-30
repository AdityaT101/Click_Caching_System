/**
 * Created by Aditya on 5/29/2017.
 */

exports.find = function(req, res) {

    res.render('FindResults', function(err, html) {
        if(err)
            return res.send(err);
        else
            return res.send(html)
    });

}

