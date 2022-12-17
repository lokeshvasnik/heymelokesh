import React from "react";
import logo from "../../assets/testimonial.png";

const TestimonialsCard = () => {
  return (
    <>
      <div className={`row row-cols-1 row-cols-md-3 g-4 `}>
        <div className="col d-flex justify-content-center align-items-center">
          <div className="card w-75">
            <div></div>
            <div>
              <img src={logo} className="card-img-top" alt="img" />
            </div>
            <div className="card-body">
              <p className="card-text">
                Real good work, Replay quick and fast work great jobb, Thanks
              </p>
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <h5 className="text-center">joneshill724</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
