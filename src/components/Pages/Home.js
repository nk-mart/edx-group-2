
import React, { useState, useEffect } from 'react';
import '../../App.css';
import Header from '../Header.js';
import QuoteAPI from '../QuoteAPI/QuoteAPI.js';
import Button from "../Button/Button.js";
import "../Button/Button.css";
import randomColor from 'randomcolor';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer';




function Home() {

    const [quote, setQuote] = useState('');
    const [backgroundColor, setBackgroundColor] = useState(randomColor());
  
    useEffect(() => {
      
  
      fetchQuote();
    }, []);
    
    async function fetchQuote() {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
       setQuote(data.content);
       setBackgroundColor(randomColor());
      
    }
  
    function storeQuote(){
   
      const quoteObject={
        quote, 
        color: backgroundColor,
        
      }
      
      // localStorage.setItem(quote, JSON.stringify(quoteObject)) 
        const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
        storedQuotes.push(quoteObject);
        localStorage.setItem('quotes', JSON.stringify(storedQuotes));

    }
  
    return (
      <div className="App">

        <Header></Header>
        <Navbar></Navbar>  
        
        <i class="fa1 fa fa-quote-left" aria-hidden="true"></i>

        <div className="quotePic" >
        <div className="colourOverlay" style={{ backgroundColor }}></div>

            <QuoteAPI quote={quote}></QuoteAPI>
      </div>

      <i class="fa2 fa fa-quote-right" aria-hidden="true"></i>


        <div className="topRightButtons">
          <Button functionToDo={storeQuote} content="Save" className="saveButton"/>

        </div>

        <div onClick={fetchQuote}><i className="nextBtn fa fa-chevron-right" aria-hidden="true"></i></div>
        <div className="homeFooter"><Footer /></div>
    </div>
  );
}

export default Home;
