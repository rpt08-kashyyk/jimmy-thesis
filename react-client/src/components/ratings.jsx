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
	    	<div className="middle-container">
	    	{'Accuracy'}{props.star(post.accuracy)}
	    	{'Location'}{props.star(post.location)}
				</div>
	    	<br></br>
	    	<div className="middle-container">
	    	{'Communication'}{props.star(post.communication)}
	    	{'Check-in'}{props.star(post.checkin)}
	    	</div>
	    	<br></br>
	    	<div className="middle-container">
	    	{'Cleanliness'}{props.star(post.cleanliness)}
	    	{'Value'}{props.star(post.value)}
	    	</div>
	    	<br></br>
	    	<hr></hr>
    	</div>
    )}
  </div>
)

export default Ratings;