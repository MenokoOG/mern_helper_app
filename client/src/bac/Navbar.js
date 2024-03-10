// Navbar.js
import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Adjust the import path as necessary

const Navbar = () => {
  const { toggleTheme } = useTheme();

  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/planning">Planning Tips</a></li>
          <li><button onClick={toggleTheme}>Toggle Theme</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
