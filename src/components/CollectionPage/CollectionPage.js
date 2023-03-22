import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './CollectionPage.css';

function CollectionPage() {

  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    // const quotes = Object.values(localStorage);
    const quotes = JSON.parse(localStorage.getItem("collection")) || []
    setSavedQuotes(quotes);
  }, []);
  

  function generatingQuote(quote) {
    // const quoteObject = JSON.parse(quote)
    return (
      <>
        <div> {quote.quote} </div>
        <hr/>
      </>
    )
  }

  return (
    <>
    <Navbar/>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">



        {/* <div className="colourOverlay" style={{ backgroundColor }}></div> */}
        {savedQuotes.map((quote) => generatingQuote(quote))}



      </div>
    </>
  );
}
export default CollectionPage