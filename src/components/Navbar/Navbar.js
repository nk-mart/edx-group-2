import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

function Navbar (props) {
    function copyToClipBoard() {
        const quotes = JSON.parse(localStorage.getItem("collection")) || [];

        const quoteStrings = quotes.map(quote => quote.quote);
        const copiedText = quoteStrings.join(" || ")
         // Copy the text inside the text field
        navigator.clipboard.writeText(copiedText);
      
        // Alert the copied text
        alert("Copied the text: " + copiedText);
      }
    return (
        <nav className="bg-gray-800 felx items-center">
            
            <div clasName="items-center">
                <button>Collection</button>
                <button>Home</button>
            </div>
            
               
            
        </nav>

    )

}
export default Navbar