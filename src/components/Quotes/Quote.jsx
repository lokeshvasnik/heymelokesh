import React, { useEffect, useState } from 'react';
import './Quote.css';

const Quote = () => {
  // * Calling api

  const [quotes, setQuotes] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch(
        'https://api.quotable.io/random?maxLength=50'
      );

      const data = await response.json();

      setQuotes(data);
    }, 8000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="container my-4">
      <div className="box">
        {setisLoading && <p>{quotes.content}</p>}
      </div>
    </div>
  );
};

export default Quote;
