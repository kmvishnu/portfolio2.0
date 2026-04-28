import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import { ThemeProvider } from 'styled-components';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import { darkTheme, lightTheme } from './utils/theme';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>

        <div style={appStyle}>
            
            <header style={headerStyle}>
                <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </header>
            <div style={contentStyle}>
                <About isDarkMode={isDarkMode} />
                <Skills isDarkMode={isDarkMode} />
                <Experience isDarkMode={isDarkMode}/>
                <Projects openModal={openModal} setOpenModal={setOpenModal} isDarkMode={isDarkMode} />
                <Education isDarkMode={isDarkMode}/>
                <Footer isDarkMode={isDarkMode}/>

                

            </div>
            {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} isDarkMode={isDarkMode}/>
          }
          {showScroll && (
            <IconButton
              onClick={scrollToTop}
              sx={{
                position: 'fixed',
                right: 20,
                bottom: 20,
                bgcolor: isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
                color: isDarkMode ? '#f4f4f4' : '#000000',
                '&:hover': {
                  bgcolor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                },
                zIndex: 2000,
              }}
              aria-label="scroll to top"
            >
              <ArrowUpwardIcon />
            </IconButton>
          )}
        </div>
        </ThemeProvider>
    );
}

export default App;
