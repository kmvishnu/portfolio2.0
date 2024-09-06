import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import {  educations, experiences } from '../../data/constants';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import EducationCard from '../Cards/EducationCard';


export default function Education({ isDarkMode }) {

  const Title = styled('div')(({ theme }) => ({
    fontSize: '42px',
    textAlign: 'center',
    fontWeight: 600,
    marginTop: '20px',
    color: isDarkMode ? '#f4f4f4' : '#191d21',
    [theme.breakpoints.down('sm')]: {
      marginTop: '12px',
      fontSize: '32px',
    },
  }));

  const Desc = styled('div')(({ theme }) => ({
    fontSize: '18px',
    textAlign: 'center',
    maxWidth: '600px',
    color: isDarkMode ? '#E2E8F0' : '#191d21',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  }));

  return (
    <Box id="education">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Title>Education</Title>
        <Desc> My educational details are as follows.</Desc>
      </Box>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: {
              xs: 0.1, // Flex value for extra-small screens
              sm: 0.1, // Flex value for small screens and up
              md: 0.25
            },
          },
        }}
      >
        {
          educations.map((education, key) => {
            return (

              <TimelineItem>
                <TimelineOppositeContent sx={{ color: isDarkMode ? '#E2E8F0' : '#191d21' }}>
                  {education.other}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>

                  <EducationCard education={education} isDarkMode={isDarkMode} />
                </TimelineContent>
              </TimelineItem>

            )
          })
        }


      </Timeline>
    </Box>
  );
}