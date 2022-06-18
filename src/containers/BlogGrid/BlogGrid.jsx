import React from 'react';

import {
  Banner,
  RegularCard,
  SearchWidget,
  PopularCategories,
  RecentPosts
} from '../../components';


const BlogGrid = () => {
  return (
    <div>
      <Banner />
      <div className="container mt-4">
        <div className="row" >
          <div className="col-lg-8 col-md-8 col-12" >
            <div className="row justify-content-center">
              {[...Array(6)].map((index) => {
                return (
                  <div className="col-5 px-0" key={index}>
                    <RegularCard />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <SearchWidget />
            <PopularCategories />
            <RecentPosts />
          </div>
        </div>
      </div>
    </div>
  )
}


export default BlogGrid;
