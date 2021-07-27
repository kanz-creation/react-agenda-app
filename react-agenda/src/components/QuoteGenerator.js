import React, { useState, useEffect } from 'react';

function QuoteFetch() {
  //hooks declared
  //quote = actual saying
  // author = who said the quote
  //loading = true by default, changed to false when we finished fetching
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
    const intervalID = setInterval(() => {
      getQuote();
    }, 5000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  function getQuote() {
    //whenever app starts, perform the fetch function
    fetch('http://quotes.rest/qod.json?category=inspire')
      //data received in promise need to convert to json then outout console
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // quote hook assigned to actual quote + assigning valeues to hooks
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      });
  }
  //displays data onto screen
  return (
    <>
      <h1>{quote}</h1>
      <p>- {author}</p>
    </>
  );
}
export default QuoteFetch;
