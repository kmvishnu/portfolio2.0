import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Bio } from '../../data/constants';

const pages = ['About', 'Skills', 'Experience', 'Projects'];

function Header({ isDarkMode, toggleTheme }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: isDarkMode ? '#000000' : '#f4f4f4', color: isDarkMode ? '#f4f4f4' : '#000000', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Left side: Vishnu KM */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'flex', md: 'flex' }, alignItems: 'center' }}
                    >
                        Vishnu K M
                    </Typography>

                    {/* Centered Pages */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                        {pages.map((page) => (
                            <ScrollLink
                                key={page}
                                to={page.toLowerCase()}
                                smooth={true}
                                duration={500}
                                offset={-70} // Offset to adjust for the fixed header height
                            >
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: isDarkMode ? 'white' : 'black', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </ScrollLink>
                        ))}
                        <Button href={Bio.github}>GitHub</Button>
                    </Box>

                    {/* Right side: Theme Toggle Button and Menu Icon */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        {/* Theme Toggle Button */}
                        <IconButton onClick={toggleTheme} color="inherit">
                            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>

                        {/* Menu Icon for mobile view */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 2 }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <ScrollLink
                                        key={page}
                                        to={page.toLowerCase()}
                                        smooth={true}
                                        duration={500}
                                        offset={-70} // Offset to adjust for the fixed header height
                                        onClick={handleCloseNavMenu}
                                    >
                                        <MenuItem>
                                            <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                        </MenuItem>
                                    </ScrollLink>
                                ))}
                                <MenuItem key='github' onClick={handleCloseNavMenu} >
                                    <Typography
                                        sx={{ textAlign: 'center' }}
                                        component="a"
                                        href={Bio.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        Github
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    );
}

export default Header;
