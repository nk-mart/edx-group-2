import React, { useState, useEffect } from 'react';

function CollectionPage(){

    const [savedQuotes, setSavedQuotes] = useState([]);
    
      useEffect(() => {
        const quotes = Object.values(localStorage);
        setSavedQuotes(JSON.parse(JSON.stringify(quotes)));
        console.log(quotes);
      }, []);

      function generatingQuote(quote){
        const quoteObject = JSON.parse(quote)
        return (<div> {quoteObject.quote} {quoteObject.color}</div>)
      }
    
    return (
        <div className="Grid">
            hello
            {savedQuotes.map((quote) => generatingQuote(quote))}
        </div>
     );
  }
export default CollectionPage