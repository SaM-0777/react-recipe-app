import React from 'react';

import crouselImage1 from '../../assets/crousel-img-1.jpg';


const Banner = () => {
  return (
    <div>
      <section>
        <div className="">
          <div className="position-relative">
            <img src={crouselImage1} alt="" className="" style={{ width: '100%', height: '50vh' }} />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h1 className='fw-bolder' style={{ fontSize: '5rem' }} >Recipe Categories</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner;
