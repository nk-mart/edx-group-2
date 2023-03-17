import React from "react";
import CollectionPage from "./components/CollectionPage.js";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";


function App() {
  return (

  
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collectionpage" element={<CollectionPage />} />
      </Routes>
    

    </BrowserRouter>

  
  );
}

export default App;
