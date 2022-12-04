import React from 'react';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import { SiMinutemailer } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';

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
    
            <Button className="custom__button">Contact Me</Button>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-between align-items-center flex-column">
          <div>
            <h4>Message Me Here</h4>
            <p>
                <FaDiscord size={30} /> 
              <a href="https://discord.com/">
              lokya
              </a>
            </p>
            <p>
              <SiFiverr className="mr-2" size={30} />
              <a href="https://fiver.com/">
                https://www.fiverr.com/share/AQbvKa
              </a>
            </p>
            <p>
              <FaLinkedin className="mr-2" size={30} />
              <a href="https://www.linkedin.com/in/lokesh-vasnik">
                https://www.linkedin.com/in/lokesh-vasnik
              </a>
            </p>

            <p>
              <FaInstagram className="mr-2" size={30} />
              <a href="https://www.instagram.com/lokeshvasnik1602/">
                https://www.instagram.com/lokeshvasnik1602/
              </a>
            </p>
          </div>
          <Button>
            <h4>Support Me Here</h4>
            <p>
              <SiMinutemailer size={30} /> https://www.fiverr.com/share/AQbvKa
            </p>
          </Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactMe;
