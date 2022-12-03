import React from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import './Quote.css';

const Quote = () => {
  // Storing the data into this variable
  const [quote, setQuote] = useState([]);

  // * Collection Ref
  const collectionRef = collection(db, 'quotes');

  // * get collection data

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);

      setQuote(data.docs.map((items) => ({ ...items.data(), id: items.id })));
    };

    getData();
  }, []);

  return (
    <div className="container my-4">
      <div className="box">
        {quote.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Quote;
