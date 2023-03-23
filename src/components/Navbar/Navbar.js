
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav className="Navbar bg-gray-600 justify-center">
            <ul className="flex flex-row justify-center ">
            <li className="p-4 hover:text-white">
            <Link to="/">Home</Link>
            </li>
            <li className="p-4 hover:text-white">
            <Link to="/collectionpage">Collection</Link>
            </li>
        </ul>
        </nav>
    </>
    )
}
export default Navbar
