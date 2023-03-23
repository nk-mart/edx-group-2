import React, { useState, useEffect } from 'react';
import './CollectionPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../Navbar/Navbar';

function CollectionPage(){

    const [savedQuotes, setSavedQuotes] = useState([]);
    
    useEffect(() => {
      const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
      setSavedQuotes(quotes);
      console.log(quotes)
    }, []);
  

    function generatingQuote(quote){
      let quoteObject = quote;
      if (typeof quote === 'string') {
        quoteObject = JSON.parse(quote);
      }
      const backgroundColor = quoteObject.color;
      return (
        <div className="flex justify-center mt-4 rounded-lg transition ease-in-out delay-150 hover:scale-110 hover:bg-teal-500 duration-300 overflow-ellipsis overflow-hidden " quote-key={quoteObject.quote} >
            <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg ">
              <div class="mb-2 leading-tight">
                <i class="fa-sharp fa-regular fa-quotes" aria-hidden="true"></i>
              </div>
              <p className="mb-4 text-base rounded-lg text-white p-4" style={{ backgroundColor }}>
                  {quoteObject.quote}
              </p>
              <button
                  type="button"
                  className="inline-block rounded bg-cyan-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] bg-gradient-to-r from-emerald-700 to-teal-600"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Copy Quote
              </button>
            </div>
        </div>)
      }
    
    return (

      <>
      <Navbar></Navbar>
      <div className="bg-local bg-cover background-image bg-no-repeat my-6 py-4 mx-7 shadow-xl shadow-cyan-500/50 ">
        <h1 className=" flex justify-center text-center rounded-lg py-3 px-3 lg:ml-[700px] sm:ml-[200px] md:ml-[250px] font-bold text-xl max-w-lg bg-gradient-to-r from-emerald-600 to-teal-500 text-white">Favorite quotes</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center py-2 px-2 ">         
            {/* <div className="colourOverlay" style={{ backgroundColor }}></div> */}
            {savedQuotes.map((quote) => generatingQuote(quote))}
          </div>
      </div>
      </>
     );
    }
export default CollectionPage