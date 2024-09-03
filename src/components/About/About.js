import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import { ReactTyped } from "react-typed";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f4f4f4',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const ProfileImage = styled('img')(({ theme }) => ({
    borderRadius: '50%',
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    marginTop:0,
    border: '4px solid #7e3af2',
    [theme.breakpoints.down('sm')]: {
        maxWidth: '200px',
    },
}));

const CheckResumeButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#7e3af2',
    color: 'white',
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 2),
    borderRadius: '25px',
    fontSize: '0.875rem',
    '&:hover': {
        backgroundColor: '#6b2fc1',
    },
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',
    fontWeight:'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
}));

export default function About() {
    return (
        <div id='about'>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', md: 'block' }, padding: 10 }}>
                <Grid container spacing={{ md: 1, sm: 1 }} columns={{ sm: 12, md: 12 }} >
                    <Grid size={{ sm: 7, md: 7 }}  >
                        <ResponsiveTypography variant="h1" component="h1" gutterBottom>
                            Hi, I am <br /><span style={{ color: '#7e3af2' }}>Vishnu K M</span>
                        </ResponsiveTypography>
                        <ResponsiveTypography variant="h4" component="h2" gutterBottom>
                            I'm a{' '}
                            <span style={{ color: '#7e3af2', fontSize: '1.5rem',
                                '@media (max-width:500px)': {
                                    fontSize: '1rem',
                                } }}>
                                <ReactTyped
                                    strings={['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Programmer']}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                >
                                </ReactTyped>
                            </span>
                        </ResponsiveTypography>
                        <Typography
                            variant="body1"
                            paragraph
                            style={{
                                fontSize: '1rem',
                                '@media (max-width:500px)': {
                                    fontSize: '0.875rem',
                                }
                       
                            }}
                        >
                        I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning. I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.

                    </Typography>
                    <CheckResumeButton variant="contained">Check Resume</CheckResumeButton>
                </Grid>
                <Grid size={{ sm: 5, md: 5 }} sx={{ padding: 5, alignContent: 'center'}}>
                    <Box  >
                        <ProfileImage src="https://via.placeholder.com/300" alt="Profile" />
                    </Box>
                </Grid>
            </Grid>
        </Box >


            <Box sx={{ flexGrow: 1, display: { md: 'none', sm: 'none' }, padding: 5, alignContent: 'center' }}>
                <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }} >
                    <Grid size={{ xs: 12 }}  >
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ProfileImage src="https://via.placeholder.com/300" alt="Profile" />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <ResponsiveTypography variant="h1" component="h1" gutterBottom>
                            Hi, I am <br /><span style={{ color: '#7e3af2' }}>Vishnu K M</span>
                        </ResponsiveTypography>
                        <ResponsiveTypography variant="h4" component="h2" gutterBottom>
                            I'm a{' '}
                            <span style={{ color: '#7e3af2', fontSize: '1.5rem' }}>
                                <ReactTyped
                                    strings={['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Programmer']}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                >
                                </ReactTyped>
                            </span>
                        </ResponsiveTypography>
                        <Typography
                            variant="body1"
                            paragraph
                            style={{
                                fontSize: '1rem',
                                '@media (max-width:600px)': {
                                    fontSize: '0.875rem',
                                },
                            }}
                        >
                            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning. I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CheckResumeButton variant="contained" sx={{width:'200px'}}>Check Resume</CheckResumeButton>
    </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>

    );
}

