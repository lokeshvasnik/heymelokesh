import React from 'react';
import './Quote.css';

const Quote = () => {
  // * Calling api

  // const [quotes, setQuotes] = useState([]);
  // const [isLoading, setisLoading] = useState(false);

 
  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     const response = await fetch(
  //       'https://api.quotable.io/random?maxLength=50'
  //       );
        
  //       const data = await response.json();

  //       setQuotes(data);
  //     }, 8000);
      
  //     return () => setisLoading(interval);
  //   }, []);



  return (
    <div className="container my-4">
      <div className="box">
        <p>Keep smiling, because life is a beautiful thing and there's so much to smile about.</p>
      </div>
    </div>
  );
};

export default Quote;
