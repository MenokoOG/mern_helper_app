// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure you import the Navbar component
import Home from './components/Home';
import About from './components/About';
import Resources from './components/Resources';
import Author from './components/Author';
import MPage from './components/MPage';
import EPage from './components/EPage';
import RPage from './components/RPage';
import NPage from './components/NPage';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is placed here to ensure it's displayed across all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/author" element={<Author />} />
        <Route path="/m-page" element={<MPage />} />
        <Route path="/e-page" element={<EPage />} />
        <Route path="/r-page" element={<RPage />} />
        <Route path="/n-page" element={<NPage />} />
      </Routes>
    </Router>
  );
}

export default App;
