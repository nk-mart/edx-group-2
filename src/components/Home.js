import React, { useState, useEffect } from 'react';
import '../App.css';
import QuoteAPI from "./QuoteAPI";
import {Link} from 'react-router-dom'




function Home() {

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
      <div className="App">
        <div className="header text-7xl text-orange-700 ">QuoteNerdy</div> 
        <h1 ClassName="header">feeling lucky....</h1>
        
          <QuoteAPI quote={quote}></QuoteAPI>
  
        <div className="topRightButtons">
            <a href="" className="saveIcon  text-6xl" onClick={storeQuote}>Save</a>
            <Link to="/collectionpage" className="collectionIcon text-5xl">
          collection
        </Link>

        </div>
        <div className="middleSideButtons">
            <a href="" className="leftIcon text-5xl" onClick={fetchQuote}>Next Quote</a>
        </div>
      </div>
    );
  }
  
  
  export default Home;

  