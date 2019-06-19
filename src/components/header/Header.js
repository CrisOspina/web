/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../header/Header.css';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/index';

const Header = () => {
  return ( 
    <React.Fragment>
      <div className="container-fluid">

        {/* home */}
        <div className="row-fluid">
          <div className="col-cont col-12">
            <header>
              <Link to="/">
                <p>Home</p>
              </Link>
            </header>
          </div>
        </div>

        {/* menu burger */}
        <BurgerMenu />
      

        {/* Navegación */}
        <div className="container">
          <div className="col-container mt-1">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="col-container-item">
                  <Link to="/about">
                    <p className="col-container-text" > About me </p>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">  
                <div className="col-container-item">
                  <Link to="/portfolio">
                    <p className="col-container-text" > Portfolio </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
 
export default Header;