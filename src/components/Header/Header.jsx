import React from "react";
import Button from "../Button/Button";
import video from "../../assets/gifmaker.gif";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex justify-content-center align-items-start flex-column p-5">
            <h1 className="fw-bold lh-lg">
              Lokesh Vasnik a <span>Web Designer</span> &{" "}
              <span>Front-End Developer</span>
            </h1>
            <p>
              Hey there! Lokesh here I'm from India🇮🇳 a computer science student
              and I have been developing various websites, especially on the
              Front End using <span>HTML</span>,<span>CSS</span>,
              <span>JAVASCRIPT </span>&<span> REACT,</span> and also working as
              a freelancer on <span>FIVER</span>
            </p>
            <Button className="custom__button">Contact Me</Button>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center  ">
          <img className="w-75 rounded" src={video} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
