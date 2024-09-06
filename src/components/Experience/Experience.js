
// import React from 'react'
// import styled from 'styled-components'
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import ExperienceCard from '../Cards/ExperienceCard';
// import { experiences } from '../../data/constants';

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     position: relative;
//     z-index: 1;
//     align-items: center;
//     padding: 40px 0px 80px 0px;
//     @media (max-width: 960px) {
//         padding: 0px;
//     }
// `;

// const Wrapper = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     max-width: 1050px;
//     padding: 80px 0;
//     gap: 12px;
//     @media (max-width: 960px) {
//         flex-direction: column;
//     }
// `;

// const Title = styled.div`
// font-size: 42px;
// text-align: center;
// font-weight: 600;
// margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//       margin-top: 12px;
//       font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 600px;
//     color: ${({ theme }) => theme.text_secondary};
//     @media (max-width: 768px) {
//         margin-top: 12px;
//         font-size: 16px;
//     }
// `;

// const TimelineSection = styled.div`
//     width: 100%;
//     max-width: 1000px;
//     margin-top: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 12px;
// `;



// const Experience = () => {
//     return (
//         <Container id="experience">
//             <Wrapper>
//                 <Title>Experience</Title>
//                 <Desc>
//                     My work experience as a software engineer and working on different companies and projects.
//                 </Desc>
//                 <TimelineSection>
//                     <Timeline >
//                         {experiences.map((experience,index) => (
//                             <TimelineItem>
//                                 <TimelineSeparator>
//                                     <TimelineDot variant="outlined" color="secondary" />
//                                     {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
//                                 </TimelineSeparator>
//                                 <TimelineContent sx={{ py: '12px', px: 2 }}>
//                                     <ExperienceCard experience={experience}/>
//                                 </TimelineContent>
//                             </TimelineItem>
//                         ))}
//                     </Timeline>

//                 </TimelineSection>
//             </Wrapper>
//         </Container>
//     )
// }

// export default Experience

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
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box } from '@mui/material';


export default function Experience({ isDarkMode }) {

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
    <Box id="experience">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Title>Experience</Title>
        <Desc>My work experience as a software engineer</Desc>
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
          experiences.map((experience, key) => {
            return (

              <TimelineItem>
                <TimelineOppositeContent sx={{ color: isDarkMode ? '#E2E8F0' : '#191d21' }}>
                  {experience.other}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>

                  <ExperienceCard experience={experience} isDarkMode={isDarkMode} />
                </TimelineContent>
              </TimelineItem>

            )
          })
        }


      </Timeline>
    </Box>
  );
}