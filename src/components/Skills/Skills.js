import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { skills } from '../../data/constants';

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    padding: '20px',
}));

const Wrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1100px',
    gap: '12px',
    [theme.breakpoints.down('sm')]: {
        padding: '0 16px',
    },
}));

const SkillsContainer = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '30px',
    gap: '30px',
    justifyContent: 'center',
}));



const SkillList = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '20px',
}));

const SkillImage = styled('img')(({ theme }) => ({
    width: '24px',
    height: '24px',
    [theme.breakpoints.down('sm')]: {
        width: '20px',
        height: '20px',
    },
}));

const Skills = ({ isDarkMode }) => {

    // background-color: rgba(17, 25, 40, 0.83);
    // border: 1px solid rgba(255, 255, 255, 0.125);
    // box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    // border-radius: 16px;

    const Skill = styled('div')(({ theme }) => ({
        flex: '1 1 calc(50% - 60px)', // Adjust for 2 columns with gap
        maxWidth: 'calc(50% - 60px)', // Adjust for 2 columns with gap
        background: isDarkMode ? '#111928d4' : '#f4f4f4',
        // backgroundColor: rgba(17, 25, 40, 0.83),
        border: '0.1px solid #ffffff20',
        boxShadow: '#175ce626 0px 4px 24px',
        borderRadius: '16px',
        padding: '18px 36px',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            flex: '1 1 100%', // Full width on small screens
            maxWidth: '100%', // Full width on small screens
            padding: '12px 24px',
        },
    }));

    const SkillItem = styled('div')(({ theme }) => ({
        fontSize: '16px',
        fontWeight: 400,
        color: isDarkMode ? '#E2E8F0' : theme.text_primary + 80,
        borderRadius: '12px',
        boxShadow: '#3b3b3b9e 0px 4px 10px',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        border: `1px solid #854CE6`,
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
            padding: '8px 12px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            padding: '6px 10px',
        },
    }));

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

    const SkillTitle = styled('h2')(({ theme }) => ({
        fontSize: '28px',
        fontWeight: 600,
        color: isDarkMode ? '#E2E8F0' : '#191d21',
        marginBottom: '20px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        },
    }));

    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>Here are some of my skills on which I have been working for the past 3 years.</Desc>
                <SkillsContainer>
                    {skills.map((skill) => (
                        <Skill key={skill.title}>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item) => (
                                    <SkillItem key={item.name}>
                                        <SkillImage src={item.image} alt={item.name} />
                                        {item.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
};

export default Skills;
