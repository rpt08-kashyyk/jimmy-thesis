import React from 'react';

const Ratings = (props) => (
  <div>
    {props.data.map((post) =>
    	<div key={post._id}>
	    	<h2>{`${post.totalReviews.total} Reviews `}{props.star(post.totalReviews.average)}</h2>
 			<form>
       <input
         placeholder="Search reviews"
         onChange={(e) => props.search(e.target.value)}
       />
     </form>
	    	<hr></hr>
	    	{`Accuracy `}{props.star(post.accuracy)}
				{`Communication `}{props.star(post.communication)}
				{`Cleanliness `}{props.star(post.cleanliness)}
	    	<br></br>
	    	{` Location `}{props.star(post.location)}
	    	{` Check-in `}{props.star(post.checkin)}
	    	{` Value `}{props.star(post.value)}
	    	<br></br>
	    	<hr></hr>
    	</div>
    )}
  </div>
)

export default Ratings;