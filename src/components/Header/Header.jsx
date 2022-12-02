import React from 'react';
import profile from '../../assets/profile.png'
const Header = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex justify-content-center align-items-start flex-column p-5">
            <h1 className='fw-bold lh-lg'>Lokesh Vasnik a <span>Web Designer</span> & <span>Front-End Developer</span></h1>
            <p>
              He crafts responsive websites where technologies meet creativity
            </p>
            <button>Contact Me</button>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-end">
            <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
