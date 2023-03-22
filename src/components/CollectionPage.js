import React, { useState, useEffect } from 'react';


function CollectionPage(){

    const [savedQuotes, setSavedQuotes] = useState([]);
    
      useEffect(() => {
        const quotes = Object.values(localStorage);
        setSavedQuotes(quotes);
        console.log(quotes);
      }, []);
    

      
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-1 '>
            hello
            {savedQuotes.map((quote) => (<div className='bg-gray-800 shadow-md animate__animated animate__fadeInDown '> {quote} </div>))}
        </div>
     );

}

export default CollectionPage