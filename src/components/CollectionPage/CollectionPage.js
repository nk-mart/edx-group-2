import React, { useState, useEffect } from 'react';
import './CollectionPage.css';

function CollectionPage(){

    const [savedQuotes, setSavedQuotes] = useState([]);
    
      useEffect(() => {
        const quotes = Object.values(localStorage);
        setSavedQuotes(JSON.parse(JSON.stringify(quotes)));
        console.log(quotes);
      }, []);

      function generatingQuote(quote){
        const quoteObject = JSON.parse(quote)
        return (<div> {quoteObject.quote} </div>)
      }
    
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
          
        {/* <div className="colourOverlay" style={{ backgroundColor }}></div> */}
          {savedQuotes.map((quote) => generatingQuote(quote))}

        </div>
     );
  }
export default CollectionPage