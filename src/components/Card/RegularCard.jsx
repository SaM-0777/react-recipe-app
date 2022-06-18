import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClockCircle, AiOutlineDollar, AiFillStar } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';


const RecipeRating = ({ n }) => {
  return (
    <div className='mb-2' >
      {[...Array(n)].map((item) => {
        return <AiFillStar color='gold' key={item} />
      })}
    </div>
  )
}

const RecipeInfo = () => {
  return (
    <div className="text-center mb-2" >
      <h6 className='d-inline me-1' >
        <span className='text-danger me-1' ><AiOutlineClockCircle /></span>
        <span className='text-center text-danger fw-bold' >50 Minute</span>
      </h6>
      <h6 className='d-inline ms-1' >
        <span className='text-danger me-1' ><AiOutlineDollar /></span>
        <span className='text-center text-danger fw-bold' >Price 45.99</span>
      </h6>
    </div>
  )
}

const RegularCard = ({ text, RatingOrInfo, textAlignment, isReadMore, n }) => {
  return (
    <div className="container">
      <section className="mx-auto mt-3" >
        <div className="card" style={{ border: 'none' }} >
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" className="img-fluid" alt='' />
            <Link to="">
              <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} ></div>
            </Link>
          </div>
          <div className="card-body" >
            {(RatingOrInfo === 'Rating' ? <RecipeRating n={n} /> : null)}
            {(RatingOrInfo === 'Info' ? <RecipeInfo /> : null)}
            
            <h5 className={`card-title font-weight-bold text-${textAlignment}`} style={{ fontFamily: 'Noto Serif, Serif', fontSize: '1rem' }} >
              {text}
            </h5>
            
            {(isReadMore ?
              <div>
                <span>
                  <Link className='text-decoration-none text-black' to='' >
                    Read More <BsArrowRight className='ms-1' color='red' />
                  </Link>
                </span>
              </div>
              : null
            )}
          </div>
        </div>
      </section>
    </div>
  )
}


export default RegularCard;
