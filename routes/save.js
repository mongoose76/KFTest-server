var express = require('express');
var router = express.Router();

/* save data */
router.post('/', function(req, res) {
  res.send('saved');
});

module.exports = router;
