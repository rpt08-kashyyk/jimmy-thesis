var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/data', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/data/:id', function (req, res) {
	db.selectId(req.params.id, function (err, data){
		if (err) {
			console.log(err);
		}
  	res.send(data);
	})
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

