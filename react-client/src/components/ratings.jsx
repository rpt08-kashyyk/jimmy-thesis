import React from 'react';

const Ratings = (props) => (
  <div>
    {props.data.map((post) => 
    	<div key={post._id}>
    	<h2>{`${post.totalReviews.total} Reviews ${post.totalReviews.average}`}</h2>
    	{`Accuracy ${post.accuracy} Location ${post.location}`}<br></br>
    	{`Communication ${post.communication} Check-in ${post.checkin}`}<br></br>
    	{`Cleanliness ${post.cleanliness} Value ${post.value}`}<br></br>
    	<hr></hr></div>
    )}
  </div>
)

export default Ratings;