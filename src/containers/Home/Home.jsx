import React from 'react';
import './Home.css';

import {
  Crousel,
  Card,
  SearchWidget,
  RecentPosts,
  PopularCategories,
  RegularCard
} from '../../components';


const Home = () => {
  return (
    <div className='wrapper' >
      <Crousel />
      <div className="container mx-auto" style={{margin: '0 8rem'}} >
        <div className="row" >
          <div className='col-6 mb-0 pb-0' >
            <Card />
          </div>
          <div className='col-6 mb-0 pb-0' >
            <Card />
          </div>
          <div className='col-6 mb-0 pb-0' >
            <Card />
          </div>
          <div className='col-6 mb-0 pb-0' >
            <Card />
          </div>
        </div>
        <div className="container blog-container">
          <div className="row">
            <div className="col-lg-8 col-12" style={{ marginTop: '4rem' }} >
              <div className="popular-recipe my-5">
                <div className='px-4' >
                  <h2>Popular Recipe</h2>
                  <hr />
                </div>
                <div className="row">
                  {[1, 2, 3, 4, 5, 6].map((index) => {
                    return (
                      <div key={index} className="col-lg-4 col-6">
                        <RegularCard RatingOrInfo="Info" textAlignment="center" isReadMore={false} n={0} />
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="feature-recipe my-5">
                <div className="px-4">
                  <h2>Features Recipe</h2>
                  <hr />
                </div>
                <div className="row">
                  {[1, 2, 3, 4, 5, 6].map((index) => {
                    return (
                      <div key={index} className="col-lg-4 col-6">
                        <RegularCard RatingOrInfo="Rating" textAlignment="start" isReadMore={true} n={4} />
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="terndy-recipe my-5">
                <div className="px-4">
                  <h2>Trendy Recipe</h2>
                  <hr />
                </div>
                <div className="row">
                  {[1, 2, 3, 4, 5, 6].map((index) => {
                    return (
                      <div key={index} className="col-lg-4 col-6">
                        <RegularCard RatingOrInfo="Rating" textAlignment="start" isReadMore={true} n={4} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="sidebar">
                <SearchWidget />
                <RecentPosts />
                <PopularCategories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home;
