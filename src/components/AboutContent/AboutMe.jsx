import React from 'react';
import profile from '../../assets/profile.png';
import Button from '../Button/Button';

const AboutMe = () => {
  return (
    <div className="container my-5 ">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex border-end justify-content-center align-items-start flex-column p-5">
            <p>Hello, i’m lokesh vasnik!</p>
            <p>
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>

            <p>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>

            <Button className="custom__button">Contact Me</Button>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
