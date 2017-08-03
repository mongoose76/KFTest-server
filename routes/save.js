var express = require('express');
var fs = require('fs');
var router = express.Router();

/* save data */
router.post('/', function(req, res) {

    var widget = req.body.widget;
    var data = req.body.data;
    var error;

    fs.writeFile("db/" + widget + ".txt", data, function(err) {
        if (err) {
            error = err;
        } else {
            console.log("The file was saved!");
        }
    }); 

    if (error)
        res.send(error);
    else
        res.send('saved');
});

module.exports = router;
