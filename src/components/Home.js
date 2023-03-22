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
        color: backgroundColor,
        
      }
      
      localStorage.setItem(quote, JSON.stringify(quoteObject))
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
          <Button functionToDo={storeQuote} content="Save" />
          <Link to="/collectionpage" className="collectionIcon">collection</Link>
        </div>

        <div onClick={fetchQuote}><i className="nextBtn fa fa-chevron-right" aria-hidden="true"></i></div>

    </div>
  );
}

export default Home;
