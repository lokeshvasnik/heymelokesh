import React from 'react'
import Button from '../Button/Button'
const ContactMe = () => {
  return (
    <div className="container my-5 ">
    <div className="row">
      <div className="col-lg-6">
        <div className="d-flex border-end justify-content-center align-items-start flex-column p-5">
          <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
         
          <Button className="custom__button">Contact Me</Button>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-between align-items-center">
        <Button>
            <h4>Support Me Here</h4>
            <p>9766202987</p>
        </Button>
        
        <Button>
            <h4>Message Me Here</h4>
            <p>9766202987</p>
        </Button>
      </div>
    </div>
  </div>
  )
}

export default ContactMe