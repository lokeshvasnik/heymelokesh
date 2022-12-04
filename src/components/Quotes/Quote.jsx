import React, { useEffect, useState } from 'react';
import './Quote.css';

const Quote = () => {
  // * Calling api

  const [quotes, setQuotes] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
      );

      const data = await response.json();

      setQuotes(data);
    }, 8000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="container my-4">
      <div className="box">
        {setisLoading && <p>{quotes.joke}</p>}
      </div>
    </div>
  );
};

export default Quote;
