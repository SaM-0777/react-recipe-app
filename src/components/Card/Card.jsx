import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


const Card = () => {
  return (
    <div className='card-wrapper' >
      <div className="mx-auto my-3">
        <div className="card position-relative">
          <div className="bg-image hover-overlay ripple" >
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" className="img-fluid" alt='' />
            <Link to="">
              <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
            </Link>
          </div>
          <div className="card-body position-absolute top-50 category-card-body">
            <h5 className="card-title font-weight-bold"><Link className='text-decoration-none text-white' to='' ><h1 className='card-title' >Burger</h1></Link></h5>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card;
