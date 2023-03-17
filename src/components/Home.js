import React, { useState, useEffect } from 'react';
import '../App.css';
import QuoteAPI from "./QuoteAPI.js";
import Nav from './Nav';
import { Link } from 'react-router-dom';



function App() {

  const [quote, setQuote] = useState('');

  useEffect(() => {
    

    fetchQuote();
  }, []);
  
  async function fetchQuote(event) {
    event.preventDefault();
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
     setQuote(data.content);
    
    
  }

  function storeQuote(event){
    event.preventDefault();
    localStorage.setItem(quote,JSON.stringify(quote));
  }

  return (

    
    <>

   
    <div className="App">
      <div className="header">Quote Collector</div> 
      
        <QuoteAPI quote={quote}></QuoteAPI>

      <div className="topRightButtons">
          <a href="" className="saveIcon" onClick={storeQuote}>Save</a>
          <a href="" className="collectionIcon">collection</a>
      </div>
      <div className="middleSideButtons">
          <a href="" className="rightIcon" onClick={fetchQuote}>Next Quote</a>
      </div>
    </div>
    </>
  );
}


export default App;