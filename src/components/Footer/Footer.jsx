import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption, GrPinterest } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';
import { FaTwitter } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className="container-fluid footer bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="widget">
              <div className="footer-text text-center">
                <Link to='' style={{ textDecoration: 'none' }} ><h1 className="text-white" style={{ fontSize: '4rem', fontWeight: 'bolder' }} >RECIPES</h1></Link>
                <p>© 2017 RecipeList Pty Ltd. Trademarks and brands are the property<br />of their respective owners. </p>
                <div className="social" >
                  <Link className="mx-2" to="" ><GrFacebookOption size={'2rem'} color='gray' /></Link>              
                  <Link className="mx-2" to="" ><IoLogoInstagram size={'2rem'} color='gray' /></Link>
                  <Link className="mx-2" to="" ><FaTwitter size={'2rem'} color='gray' /></Link>
                  <Link className="mx-2" to="" ><AiOutlineGooglePlus size={'2rem'} color='gray' /></Link>
                  <Link className="mx-2" to="" ><GrPinterest size={'2rem'} color='gray' /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <br />
            <div className="copyright text-white text-muted">&copy; RecipeList. Design: <Link to="" style={{ textDecoration: 'none', color: 'white' }} >HTML Design</Link>.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
