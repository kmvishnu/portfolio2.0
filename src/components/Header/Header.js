import React from 'react';

function Header({ isDarkMode, toggleTheme }) {
  const headerStyle = {
    padding: '20px',
    textAlign: 'center',
    transition: 'color 0.3s ease',
  };

  return (
    <header style={headerStyle}>
      <h1>My Portfolio</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Bright' : 'Dark'} Mode
      </button>
    </header>
  );
}

export default Header;
