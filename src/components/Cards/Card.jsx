import React from 'react';
import './Card.css';
import wallpaper from '../../assets/wallpaper.png';

const Card = (props) => {
  const data = props.data;

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((items, index) => (
          <div
          className="col d-flex justify-content-center align-items-center"
          key={index}
          >
            <div className="card">
              <img src={wallpaper} className="card-img-top" alt="img" />
              <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                <p className="card-text">{items.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
