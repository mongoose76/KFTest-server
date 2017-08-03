var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/:widget', function(req, res, next) {

    var widget = req.params.widget;
    var filePath = "db/" + widget + ".txt";
    console.log(filePath);

    fs.exists(filePath, function(exists) {
        if (exists) { // results true
          fs.readFile(filePath, {encoding: "utf8"}, function(err, data){
             if (err) {
                console.log(err);
                res.send(err);
             } else {
                res.send(data);
             }
          })
       } else { // file not found
          res.send('new widget');
       }
    });
    
});

module.exports = router;