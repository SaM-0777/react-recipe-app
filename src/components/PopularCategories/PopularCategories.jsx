import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import './PopularCategories.css';


const PopularCategories = () => {
  return (
    <div className='widget p-4' >
      <h2 className="widget-title">Categories</h2>
      <div className="link-widget">
        <div className="list-group">
          <div className="list-item p-2"><Link className='text-muted' to='' style={{ textDecoration: 'none' }} ><span className='me-2' ><BsArrowRight /></span>Breakfast</Link></div>
          <div className="list-item p-2"><Link className='text-muted' to='' style={{ textDecoration: 'none' }} ><span className='me-2' ><BsArrowRight /></span>Breakfast</Link></div>
          <div className="list-item p-2"><Link className='text-muted' to='' style={{ textDecoration: 'none' }} ><span className='me-2' ><BsArrowRight /></span>Breakfast</Link></div>
          <div className="list-item p-2"><Link className='text-muted' to='' style={{ textDecoration: 'none' }} ><span className='me-2' ><BsArrowRight /></span>Breakfast</Link></div>
          <div className="list-item p-2"><Link className='text-muted' to='' style={{ textDecoration: 'none' }} ><span className='me-2' ><BsArrowRight /></span>Breakfast</Link></div>
          <div className="list-item p-2"><Link className='text-muted' to='' style={{ textDecoration: 'none' }} ><span className='me-2' ><BsArrowRight /></span>Breakfast</Link></div>
          <div className="list-item p-2"><Link className='text-muted' to='' style={{ textDecoration: 'none' }} ><span className='me-2' ><BsArrowRight /></span>Breakfast</Link></div>
          <div className="list-item p-2"><Link className='text-muted' to='' style={{ textDecoration: 'none' }} ><span className='me-2' ><BsArrowRight /></span>Breakfast</Link></div>
          <div className="list-item p-2"><Link className='text-muted' to='' style={{ textDecoration: 'none' }} ><span className='me-2' ><BsArrowRight /></span>Breakfast</Link></div>
        </div>
      </div>
    </div>
  )
}


export default PopularCategories
