var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Properties = require('./database-mongo/index.js');

mongoose.connect('mongodb://localhost/fec');

var seedDb = function(data) {
  Properties.insertOne(data, function(err, data) {
  	if (err) throw err;
  	console.log('success');
  });
};

// data = JSON.parse(data);
// console.log(data);

seedDb(data);
