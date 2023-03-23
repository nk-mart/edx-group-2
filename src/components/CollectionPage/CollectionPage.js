import React, { useState, useEffect } from 'react';
import './CollectionPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function CollectionPage() {

  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
    setSavedQuotes(quotes);
    console.log(quotes)
  }, []);

  function copyQuote(quote) {
    navigator.clipboard.writeText(quote);

    // Alert the copied text
    alert("Copied the text: " + quote);
  }


  function generatingQuote(quote) {
    let quoteObject = quote;
    if (typeof quote === 'string') {
      quoteObject = JSON.parse(quote);
    }
    const backgroundColor = quoteObject.color;
    return (
      <>
        <div className=
          "rounded-lg h-40 transition ease-in-out delay-150 border-4 border-indigo-300/50 hover:scale-110 hover:text-white hover:bg-indigo-500 duration-300 overflow-ellipsis overflow-hidden "
          quote-key={quoteObject.quote}
          style={{ backgroundColor }}>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-1"
            onClick={() => { copyQuote(quoteObject.quote) }}
          >

            <span>Copy</span>
          </button>
          <p>{quoteObject.quote}</p>
        </div>
      </>)

  }

  return (

    <>
      <Navbar MenuItems={
        [
          {
            title: "Home",
            url: "/",
            action: () => { }
          }
        ]
      }
      />
      <div className="bg-local bg-cover background-image bg-no-repeat my-6 py-4 mx-7 shadow-xl shadow-cyan-500/50 ">
        <h1 className=" flex justify-center text-center rounded-lg py-2 px-2 lg:ml-[700px] sm:ml-[200px] md:ml-[250px] font-bold text-xl max-w-lg bg-gradient-to-r from-indigo-600 to-pink-500 text-white">Favorite quotes</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center py-2 px-2 ">
          {/* <div className="colourOverlay" style={{ backgroundColor }}></div> */}
          {savedQuotes.map((quote) => generatingQuote(quote))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default CollectionPage