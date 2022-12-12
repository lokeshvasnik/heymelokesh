import React, { useEffect, useState } from "react";
import github from "../../assets/github.svg";
import files from "../../assets/files.svg";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

import "./Card.css";

const Card = () => {
  const feesCollectionRef = collection(db, "cards");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const data = await getDocs(feesCollectionRef);

      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCards();
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cards.map((items, index) => (
          <div
            className="col d-flex justify-content-center align-items-center"
            key={index}
          >
            <div className="card">
              <img
                src="../../assets/logo.png"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                <p className="card-text">{items.des}</p>
                <div className="d-flex justify-content-between">
                  <img src={github} alt="" />
                  <img src={files} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
