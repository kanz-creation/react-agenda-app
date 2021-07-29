import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    const data = await fetch('https://api.quotable.io/random');
    const jsonData = await data.json();
    console.log(jsonData);
    setQuote(`${jsonData.content} - ${jsonData.author}`);
  };

  useEffect(() => {
    setInterval(fetchQuote, 10000);
  }, []);

  return (
    <div>
      <h1>{quote}</h1>
    </div>
  );
};
export default Quote;
