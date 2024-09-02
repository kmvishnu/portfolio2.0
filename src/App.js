import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const appStyle = {
        backgroundColor: isDarkMode ? '#000000' : '#f4f4f4',
        color: isDarkMode ? '#f4f4f4' : '#000000',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div style={appStyle}>
            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <About isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            {/* Other components go here */}
        </div>
    );
}

export default App;
