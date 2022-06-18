import React from 'react';
import './SearchWidget.css';


const SearchWidget = () => {
  return (
    <div className='widget' style={{ border: 'none' }} >
      <form className="search-form">
        <label className='mb-4' htmlFor="search-box">
          <h2 className="widget-title">Search</h2>
        </label>
        <input
            className='form-control'
            type="text"
            name="search-box"
            id="search-box"
            placeholder='Search on this site'
            style={{ width: '100%', height: '3rem' }}
          />
      </form>
    </div>
  )
}


export default SearchWidget;
