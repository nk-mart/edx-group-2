import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header.js';
import QuoteAPI from "./QuoteAPI";
import {Link} from 'react-router-dom'
import randomColor from 'randomcolor';




function Home() {

    const [quote, setQuote] = useState('');
    const [backgroundColor, setBackgroundColor] = useState(randomColor());
  
    useEffect(() => {
      
  
      fetchQuote();
    }, []);
    
    async function fetchQuote(event) {
      event.preventDefault();
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
       setQuote(data.content);
       setBackgroundColor(randomColor());
      
    }
  
    function storeQuote(event){
      event.preventDefault();
      const quoteObject={
        quote, 
        color: randomColor,
        
      }
      let quotes = localStorage.getItem("quotesArray")
      if(!quotes){
        quotes=[quoteObject]
        console.log(quotes)
      }
      else{
        let quoteOld = JSON.parse(JSON.stringify(quotes))
        console.log(typeof quoteOld)
        quoteOld.push(quoteObject)
      
    }
      localStorage.setItem("quotesArray", JSON.stringify(quotes))
    }
  
    return (
      <div className="App">

        <Header></Header>
        
        <i class="fa1 fa fa-quote-left" aria-hidden="true"></i>

        <div className="quotePic" >
        <div className="colourOverlay" style={{ backgroundColor }}></div>

            <QuoteAPI quote={quote}></QuoteAPI>
      </div>

      <i class="fa2 fa fa-quote-right" aria-hidden="true"></i>


        <div className="topRightButtons">
          <button className="saveIcon" onClick={storeQuote}>Save</button>
          <Link to="/collectionpage" className="collectionIcon">collection</Link>
        </div>

        <div onClick={fetchQuote}><i className="nextBtn fa fa-chevron-right" aria-hidden="true"></i></div>

    </div>
  );
}

export default Home;
