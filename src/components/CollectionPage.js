import React, { useState, useEffect } from 'react';

function CollectionPage(){

    const [savedQuotes, setSavedQuotes] = useState([]);
    
      useEffect(() => {
        const quotes = Object.values(localStorage);
        setSavedQuotes(quotes);
        console.log(quotes);
      }, []);
    
    return (
        <div>
            hello
        </div>
     );

}

export default CollectionPage