import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

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
        <nav className="bg-gray-800 justify-center">
            
            <ul className="flex flex-row justify-center ">
                <li className="p-4 hover:text-white">
                <Link to="/">Collection</Link>
                </li>
                <li className="p-4 hover:text-white">
                <Link to="/collectionpage">Collection</Link>
                </li>
            </ul>
            
               
            
        </nav>

    )

}
export default Navbar