{
   _id: Number,
   accuracy: Number,
   communication: Number,
   cleanliness: Number,
   location: Number,
   checkin: Number,
   value: Number,
   reviews: [
      {
         accuracy: Number,
         communication: Number,
         cleanliness: Number,
         location: Number,
         checkin: Number,
         value: Number,
         username: String,
         date: String,
         comment: String,
         userImage: String,
         propertyId: Number
      }
   ],
   totalReviews: {
      average: Number,
      total: Number
   },
   flag: String
}
