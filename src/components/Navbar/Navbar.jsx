import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='container-fluid' >
      <div className="navbar-container">
        <nav className="navbar navbar-expand py-3">
          {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#RecipeListmenu" aria-controls="RecipeListmenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>*/}
          <div className="nav-container container">
            <Link className="navbar-brand ms-4" to="#" style={{ color: 'black', fontWeight: 'bold' }} >Navbar</Link>
            <ul className="navbar-nav align-items-center ms-auto">
              <li className="nav-item mx-3">
                <Link className="nav-link" to="" style={{ fontSize: '14px', color: 'black', fontWeight: 'bold' }} >Home</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="" style={{ fontSize: '14px', color: 'black', fontWeight: 'bold' }} >Recipes</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="" style={{ fontSize: '14px', color: 'black', fontWeight: 'bold' }} >Features</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="" style={{ fontSize: '14px', color: 'black', fontWeight: 'bold' }} >Contact Us</Link>
              </li>
              <li className="nav-item btn bg-danger mx-3">
                <Link className="nav-link p-0 py-1" to="" style={{ color: 'white', fontWeight: 'bold' }} ><CgProfile size='1.5rem' /></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
};

export default Navbar;
