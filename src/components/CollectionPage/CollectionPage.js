import React, { useState, useEffect } from 'react';
import './CollectionPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CollectionPage(){

    const [savedQuotes, setSavedQuotes] = useState([]);
    
      useEffect(() => {
        const quotes = Object.values(localStorage);
        setSavedQuotes(JSON.parse(JSON.stringify(quotes)));
      }, []);

      function generatingQuote(quote){
        const quoteObject = JSON.parse(quote)
        return (<div className="rounded-lg h-32 transition ease-in-out delay-150 border-4 border-indigo-300/50 hover:scale-110 hover:text-white hover:bg-indigo-500 duration-300 overflow-ellipsis overflow-hidden " quote-key={quoteObject.quote} style={{backgroundColor: `${quoteObject.color}`}}><FontAwesomeIcon icon="fa-thin fa-face-smile" />{quoteObject.quote} </div>)
      }
    
    return (
      <div className="bg-local bg-cover background-image bg-no-repeat my-6 py-4 mx-7 shadow-xl shadow-cyan-500/50 ">
        <h1 className=" flex justify-center text-center rounded-lg py-2 px-2 lg:ml-[700px] sm:ml-[200px] md:ml-[250px] font-bold text-xl max-w-lg bg-gradient-to-r from-indigo-600 to-pink-500 text-white">Favorite quotes</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center py-2 px-2 ">         
            {/* <div className="colourOverlay" style={{ backgroundColor }}></div> */}
            {savedQuotes.map((quote) => generatingQuote(quote))}
          </div>
      </div>
     );
    }
export default CollectionPage