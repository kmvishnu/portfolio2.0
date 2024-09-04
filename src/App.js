import React, { useState } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import styled from "styled-components";


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

    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: isDarkMode ? '#000000' : '#f4f4f4',
        color: isDarkMode ? '#f4f4f4' : '#000000',
        padding: '10px 20px'
    };

    const contentStyle = {
        marginTop: '50px',  // Adjust this value based on your header height
    };


    return (
        <div style={appStyle}>
            
            <header style={headerStyle}>
                <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </header>
            <div style={contentStyle}>
                <About isDarkMode={isDarkMode} />
                <Skills isDarkMode={isDarkMode} />
                <Experience isDarkMode={isDarkMode}/>
                {/* Other components go here */}
            </div>
            
        </div>
    );
}

export default App;
