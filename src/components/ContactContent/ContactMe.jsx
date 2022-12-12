import React from 'react';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import { SiMinutemailer } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const ContactMe = () => {
  return (
    <div className="container my-5 ">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex border-end justify-content-center align-items-start flex-column p-5">
            <p>
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me!!
            </p>

            <p>
              Support Me Here {'=>'}
              <a href="https://www.fiverr.com/share/XEqwam">Fiver Gig</a>
            </p>

            <Button className="custom__button">Contact Me</Button>
          </div>
        </div>
        <div className="col-lg-6  d-flex justify-content-center align-items-center flex-column ">
          <h4>Message Me Here</h4>
          <div className="px-4 my-4 py-2 ">
            <div className="row d-flex align-items-center text-center flex-column">
              <div className="col-md-4 ">
                <p>
                  <a href="https://discord.com/">
                    <FaDiscord size={30} /> lokya
                  </a>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <a href="https://fiver.com/">
                    <SiFiverr className="mr-2" size={40} /> lokesh vasnik
                  </a>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <a href="https://www.linkedin.com/in/lokesh-vasnik">
                    <FaLinkedin className="mr-2" size={30} />
                    Lokesh Vasnik
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
