import React from 'react';

const Posts = (props) => (
  <div>
    {props.data.map((post) => 
    	<div key={post._id}>{post.reviews.map((review, i) =>
    		<div key={i}>{review.comment}<hr></hr></div>
    	)}</div>
    )}
  </div>
)

export default Posts;