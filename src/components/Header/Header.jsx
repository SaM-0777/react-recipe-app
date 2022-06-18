import React from 'react';
import { Link } from 'react-router-dom';
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';
import { FaTwitter } from 'react-icons/fa';
import './Header.css';


const Header = () => {
  return (
    <div className="container-fluid bg-light">
      <header className='header' >
        <div className='container px-5' >
          <div className="navbar navbar-expand navbar-light text-mute">
            <div className="container header-container" >
              <ul className="navbar-nav justify-content-start">
                <li className="nav-item px-3">
                  <Link className="nav-link" to="">About</Link>
                </li>
                <li className="nav-item px-3">
                  <Link className="nav-link" to="">Settings</Link>
                </li>
                <li className="nav-item px-3">
                  <Link className="nav-link" to="">Contact Us</Link>
                </li>
              </ul>
              <ul className="navbar-nav justify-content-end align-item-center my-auto social-icons" >
                <li className="nav-item mx-auto px-1">
                  <Link className="nav-link" to=""><GrFacebookOption size='1.5rem' color='red' /></Link>
                </li>
                <li className="nav-item mx-auto px-1">
                  <Link className="nav-link" to=""><IoLogoInstagram size='1.5rem' /></Link>
                </li>
                <li className="nav-item mx-auto px-1">
                  <Link className="nav-link" to=""><FaTwitter size='1.5rem' /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
};


export default Header;
