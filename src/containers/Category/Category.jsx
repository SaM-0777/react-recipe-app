import React from 'react';
import { Link } from 'react-router-dom';

import { Banner, RegularCard } from '../../components'


const Category = () => {
  return (
    <div>
      <Banner />
      <section>
        <div className="container mt-4" style={{ marginBottom: '6rem' }}>
          <div className="row mx-auto" style={{ maxWidth: '75%' }} >
            {[...Array(9)].map((index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 col-12" >
                  <Link className='text-decoration-none text-black' to='' >
                    <RegularCard text="Yamee Pizza" RatingOrInfo="" textAlignment="center" isReadMore={false} n={0} />
                  </Link>
                </div>
              )
            })}
          </div>
          {/* Pagination -Here- */}
        </div>
      </section>
    </div>
  )
}

export default Category