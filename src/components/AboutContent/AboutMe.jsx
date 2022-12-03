import React from 'react';
import profile from '../../assets/profile.png';
import Button from '../Button/Button';

const AboutMe = () => {
  return (
    <div className="container my-5 ">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex border-end justify-content-center align-items-start flex-column p-5">
            <p>
           {'=>'} I’m a self-taught front-end developer from Mumbai,India. I can
              develop responsive websites from scratch and raise them into
              modern user-friendly web experiences
            </p>

            <p>Let's talk about my interest:👇️</p>

            <p>
              <p>✅ I love development and most of Web Development❤️</p>
              <p>
                ✅ Cant say I love editing but I've made more than 50+ templates
              </p>
              <p>✅ Currently I'm mastering React</p>
              <p>✅ Aim is to become a MERN stack developer</p>
              <p>
                ✅ Love to write blogs and practice code [COMPLETED 100DAYS OF
                CODE CHALLENGE]
              </p>
                <ul className='my-2'>
                  ⭐Tech Stack: <span>HTML(5)</span>, CSS(3) , <span>SASS</span> , BOOTSTRAP(5), <span>JAVASCRIPT</span>, FIGMA
                </ul>
                <ul>
                  ⭐Strong knowledge of Websites , Problem solving and issues
                  optimization for web.
                </ul>
                <ul>⭐Good in Responsive Web Design and analyzing.</ul>
                <ul>⭐Proficiency in code optimization.</ul>
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
