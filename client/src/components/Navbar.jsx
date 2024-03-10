import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const handleChangeTheme = (newTheme) => {
    toggleTheme(newTheme);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/planning">Planning Tips</a></li>
          <li>
          <label htmlFor="theme">Change Theme:</label>
            <select value={theme} onChange={(e) => handleChangeTheme(e.target.value)}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="fun">Fun</option>
              <option value="serious">Serious</option>
              <option value="space">Space</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
