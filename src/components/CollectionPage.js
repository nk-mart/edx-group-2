import React, { useState, useEffect } from 'react';

function CollectionPage(){

    const [savedQuotes, setSavedQuotes] = useState([]);
    
      useEffect(() => {
        const quotes = Object.values(localStorage);
        setSavedQuotes(quotes);
        console.log(quotes);
      }, []);
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-1 transition-opacity'>
            hello
            {savedQuotes.map((quote) => (<div className='bg-gray-800 shadow-md '> {quote} </div>))}
        </div>
     );

}

export default CollectionPage