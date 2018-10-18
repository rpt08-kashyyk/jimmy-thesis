{
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
}