import React, { useState, useEffect } from 'react';

function QuoteAPI() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    async function fetchQuote() {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    }

    fetchQuote();
  }, []);

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
}

export default QuoteAPI;
