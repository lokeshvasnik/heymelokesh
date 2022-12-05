import React from 'react';
import logo1 from '../../assets/logo1.png';
import Cursor from '../../Cursor';
import NavLink from '../Navbar/NavLinks';
import hamburger from '../../assets/hamburger.png'
import './Nav.css';

const Nav = () => {

  const style = {
    width: '60px'
  }

  return (
    <div className="container-fluid sticky-top ">
      <Cursor/>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand rotate" href="/">
            <img style={style} src={logo1} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <img src={hamburger} alt="" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavLink />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
