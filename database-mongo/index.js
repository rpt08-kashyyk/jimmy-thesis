var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var fireSchema = mongoose.Schema({
   _id: Number,
   accuracy: Number,
   communication: Number,
   cleanliness: Number,
   location: Number,
   checkin: Number,
   value: Number,
   ratings: [
      {
         accuracy: Number,
         communication: Number,
         cleanliness: Number,
         location: Number,
         checkin: Number,
         value: Number
      }
   ],
   comments: [
      {
         username: String,
         date: String,
         comment: String,
      }
   ],
   totalReviews: Number,
   userImage: String,
   flag: String
});

var fireBnb = mongoose.model('Property', fireSchema);

var selectAll = function(callback) {
  fireBnb.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

function insertOne(story, callback) {
  fireBnb.create(story, callback);
}

module.exports.selectAll = selectAll;
exports.insertOne = insertOne;