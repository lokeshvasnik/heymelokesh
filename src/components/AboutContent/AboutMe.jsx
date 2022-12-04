import React from 'react';
import node from '../../assets/node.svg';
import javascript from '../../assets/javascript.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import bootstrap from '../../assets/bootstrap.svg';
import react from '../../assets/react.svg';
import figma from '../../assets/figma.svg';
import firebase from '../../assets/firebase.svg';

import './AboutMe.css'
const AboutMe = () => {
  return (
    <div className="container my-5 ">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex border-end justify-content-center align-items-start flex-column p-5">
            <p>
              {'=>'} I’m a self-taught front-end developer from Mumbai,India. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences
            </p>

            <p>Let's talk about my interest:👇️</p>

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
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center flex-column align-items-center">
          <p>On What I Work With {'=>'}</p>
          <div className="row">
            <div className="row">
              <div className="col d-flex flex-column ">
                <img src={html} alt="" />
            
              </div>
              <div className="col d-flex flex-column ">
                <img src={css} alt="" />
           
              </div>
              <div className="col d-flex flex-column ">

                <img src={javascript} alt="" />
              </div>
              <div className="col d-flex flex-column ">

                <img src={bootstrap} alt="" />
              </div>
              <div className="col">
                <img src={figma} alt="" />
              </div>
              <div className="col">
                <img src={node} alt="" />
              </div>
              <div className="col">
                <img src={react} alt="" />
              </div>
              <div className="col">
                <img src={firebase} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
