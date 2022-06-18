import React from 'react';
import { Link } from 'react-router-dom';
import './RecentPosts.css';

import image from '../../assets/img-2.jpg';


const RecentPosts = () => {
  return (
    <div className="widget my-5" style={{ padding: '2.5rem' }}>
      <h2 className='widget-title mb-5' >Recent Posts</h2>
      <div className="blog-list-widget">
        <div className="">
          {[1, 2, 3].map((item) => {
            return (
              <div key={item} className="my-4">
                <Link to='' className='flex-column align-items-start text-black' style={{ textDecoration: 'none' }} >
                  <div className="w-100 justify-content-between row">
                    <div className="col-6">
                      <img src={image} alt="" className='img-fluid float-left' />
                    </div>
                    <div className="col-6">
                      <h5 className="mb-1">Recipe Title</h5>
                      <small>12, Jan 2016</small>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>  
  )
}


export default RecentPosts
