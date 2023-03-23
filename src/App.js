import React from "react";
import CollectionPage from "./components/Pages/CollectionPage/CollectionPage";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collectionpage" element={<CollectionPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
