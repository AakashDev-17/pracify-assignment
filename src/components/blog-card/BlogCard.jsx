import React from 'react';
import "./blogCard.css";

const BlogCard = (props) => {
   return (
      <div className="blogCard">
         <img className="blogCard-item blogCard-img" src={ props.img } alt="blog-img" />
         <h3 className="blogCard-item blogCard-heading">{ props.heading }</h3>
         <p className="blogCard-item blogCard-desc">{ props.desc }</p>
         <h4 className="blogCard-item blogCard-read-more">Read More</h4>
      </div>
   )
}

export default BlogCard;
