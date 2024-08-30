import React, { useState } from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import './App.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const appStyle = {
        backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div style={appStyle}>
            <ResponsiveAppBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            {/* Other components go here */}
        </div>
    );
}

export default App;
