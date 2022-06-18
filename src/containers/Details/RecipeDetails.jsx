import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineClock } from 'react-icons/hi';
import { FaRegComment } from 'react-icons/fa';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

import { Banner } from '../../components';
import { SearchWidget, RecentPosts, PopularCategories } from '../../components';
import RecipeImage from '../../assets/crousel-img-1.jpg';


const RecipeDetails = () => {
  return (
    <div>
      <Banner />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="article mt-5">
              <div>
                <h1>Recipe Title</h1>
                {/* add Ratings */}
                <hr />
              </div>
              <div className="content-wrapper">
                <div className='recipe-showcase' >
                  <img className='img-fluid' src={RecipeImage} alt="" />
                  <div className="meta mt-3">
                    <div className='d-inline-block text-muted fw-bold me-5' ><CgProfile className='me-2 mb-1' size='1.25rem' color='red' />Author</div>
                    <div className='d-inline-block text-muted fw-bold me-5' ><HiOutlineClock className='me-2 mb-1' size='1.25rem' color='red' />50 Minute</div>
                    <div className='d-inline-block text-muted fw-bold me-5' ><FaRegComment className='me-2 mb-1' size='1.25rem' color='red' />Comments (05)</div>
                  </div>
                  <hr />
                </div>
                <div className="recipe-box mt-5">
                  <div className="recipe-details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, hic optio! Cupiditate ratione tempora modi cumque pariatur fuga, ipsa alias adipisci nostrum non eveniet quis reiciendis, dignissimos fugit sed enim quisquam! Repellendus laborum fugiat provident quod praesentium laboriosam nisi adipisci expedita, enim doloremque at similique doloribus modi consectetur dolore magnam accusantium delectus eligendi! Velit laboriosam repellendus reiciendis, dicta temporibus impedit iusto perferendis nemo, hic voluptate voluptates doloremque fugit voluptatum nam odio. Ex recusandae odio, minima neque quisquam temporibus unde corporis voluptatum, sint pariatur incidunt! Similique, sapiente! Itaque magnam quae esse consequuntur a. Architecto ratione quo, nemo quas ullam repudiandae vero. Eligendi at assumenda non quae qui esse labore, ducimus ipsa fuga beatae magni odit. Labore vel reiciendis numquam ipsam at nobis tempore sint error fuga in culpa, sit nesciunt illo architecto ad voluptate pariatur inventore vitae, impedit blanditiis animi iusto quibusdam. Dolore reprehenderit nam ad! Reiciendis sint mollitia asperiores doloribus?
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-5 col-12 p-4 me-5" style={{ border: '1px solid #E0E0E0' }} >
                      <h2>Ingridients</h2>
                      <hr style={{ color: '#FF0000', height: '0.15rem', width: '4rem' }} />
                      <div className='list' >
                        <div className='my-2 text-muted'>1 Cup sifted all purpose flour</div>
                        <div className='my-2 text-muted'>1 Cup sifted all purpose flour</div>
                        <div className='my-2 text-muted'>1 Cup sifted all purpose flour</div>
                        <div className='my-2 text-muted'>1 Cup sifted all purpose flour</div>
                        <div className='my-2 text-muted'>1 Cup sifted all purpose flour</div>
                        <div className='my-2 text-muted'>1 Cup sifted all purpose flour</div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-12 p-4 ms-5" style={{ border: '1px solid #E0E0E0' }} >
                      <h2>Nutrition</h2>
                      <hr style={{ color: '#FF0000', height: '0.15rem', width: '4rem' }} />
                      <div className="list">
                        <div className="d-flex flex-row my-2">
                          <div className='me-auto' >Calories</div>
                          <div className='ms-auto' >329</div>
                        </div>
                        <div className="d-flex flex-row my-2">
                          <div className='me-auto' >Calories</div>
                          <div className='ms-auto' >329</div>
                        </div>
                        <div className="d-flex flex-row my-2">
                          <div className='me-auto' >Calories</div>
                          <div className='ms-auto' >329</div>
                        </div>
                        <div className="d-flex flex-row my-2">
                          <div className='me-auto' >Calories</div>
                          <div className='ms-auto' >329</div>
                        </div>
                        <div className="d-flex flex-row my-2">
                          <div className='me-auto' >Calories</div>
                          <div className='ms-auto' >329</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* User Info */}
                  <div className='my-5' >
                    <div>
                      <h2 className='fw-bold' >Follow The Directions</h2>
                      <hr style={{ color: '#FF0000', height: '0.15rem', width: '4rem' }} />
                    </div>
                    <div className='mt-2' >
                      <div className="list">
                        {[...Array(4)].map((index) => {
                          return (
                            <div key={index} className="d-flex align-items-center my-4" >
                              <IoCheckmarkCircleOutline className='me-2 p-0 mb-4' style={{ color: '#ff0000', fontSize: '2rem' }} />
                              <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatem esse molestiae deserunt veritatis aut, itaque id rerum, veniam tempore obcaecati ex. Aperiam, voluptatibus a, sapiente culpa iste unde
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="sidebar">
              <SearchWidget />
              <PopularCategories />
              <RecentPosts />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default RecipeDetails;

