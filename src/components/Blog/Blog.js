import React from 'react';
import './blog.css';

import portfolio01 from '../../assets/image/01.png';
import porfolio02 from '../../assets/image/02.png';
import porfolio03 from '../../assets/image/03.png';

import BlogItem from './BlogItem/BlogItem';

const Blog = () => {
  return (
    <div className="blog">
      <div className="row">
        <div className="blog-title">
          <h2>Blog</h2>
          <span></span>
        </div>
      </div>
      <div className="row">
        <div className="grid-blog">
          <BlogItem 
            title={ "Responsive Web Design" }
            blogImage={ portfolio01 }
            description={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." }
            tags={ ["Html", "Css"] }
            date={ "4 jun 2020" }
          />
           <BlogItem 
            title={ "Creative Slideshow" }
            blogImage={ porfolio02 }
            description={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." }
            tags={ ["Html", "Javascript"] }
            date={ "4 jun 2020" }
          />
           <BlogItem 
            title={ "Image Gallery Lightbox" }
            blogImage={ porfolio03 }
            description={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." }
            tags={ ["Javascript"] }
            date={ "4 jun 2020" }
          />
        </div>
      </div>
    </div>
  )
}

export default Blog;