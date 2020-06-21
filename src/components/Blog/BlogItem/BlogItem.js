import React from 'react';
import './blog-item.css';

const BlogItem = ({title, blogImage, description, tags, date}) => {
  return (
    <div className="blog-item shadow-dark">
      <div className="blog-img">
        <img src={ blogImage } alt="blog" />
        <div className="blog-date">
          { date }
        </div>
      </div>
      <div className="blog-info">
        <h4 className="title-blog">{ title }</h4>
        <p className="blog-description">{ description }</p>
        <p className="blog-tags">Tags:
          { 
            tags.map((tag, key) => (
              <a href="/" key={key}>{ tag }</a>
            )) 
          }
        </p>
      </div>  
    </div>
  )
}

export default BlogItem;