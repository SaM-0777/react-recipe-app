import React from 'react';
import { Link } from 'react-router-dom';
import './Crousel.css';

import crouselImage1 from '../../assets/crousel-img-1.jpg';


const Crousel = () => {
  return (
    <section>
      <div className="">
        <div className="position-relative">
          <Link to='' ><img src={crouselImage1} alt="" className="" style={{ width: '100%', height: '85vh' }} /></Link>
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h1>Welcome to our Community</h1>
            <Link to='' className="btn btn-danger py-3 px-4">View Recipes</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Crousel;

