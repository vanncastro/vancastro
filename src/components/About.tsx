import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TbLicense } from 'react-icons/tb';
import { BsPatchQuestion } from 'react-icons/bs';
import { FaCarAlt } from 'react-icons/fa';

import { Container } from '../components/base/Container';
import { pageSettings } from 'src/utils/pageSettings';

const about = [
    {
        title: pageSettings.about.card1.title,
        icon: <TbLicense fontSize="inherit" style={{ color: 'var(--primary' }} />,
        description: pageSettings.about.card1.description,
    },
    {
        title: pageSettings.about.card2.title,
        icon: <BsPatchQuestion fontSize="inherit" style={{ color: 'var(--primary' }} />,
        description: pageSettings.about.card2.description,
    },
    {
        title: pageSettings.about.card3.title,
        icon: <FaCarAlt fontSize="inherit" style={{ color: 'var(--primary' }} />,
        description: pageSettings.about.card3.description,
    },
];

const AboutWrapper = styled.div`
    display: flex;
    margin-top: 200px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 25px;
`;

const CardWrapper = styled(Card)`
    display: flex;
    align-items: center;
    width: 350px;
    height: 350px;

    @media (max-width: 1000px) {
        &:last-child {
            margin-bottom: 200px;
        }
    }
`;

const CardContentWrapper = styled(CardContent)`
    text-align: center;
`;

const IconWrapper = styled.div`
    margin-top: -20px;
    font-size: 60px;
`;

const AboutCard = ({ title, icon, description }) => {
    return (
        <CardWrapper sx={{ fontFamily: 'var(--font-family)' }}>
            <CardContentWrapper>
                <IconWrapper>{icon}</IconWrapper>
                <Typography variant="h5" gutterBottom fontFamily="inherit" color="var(--primary)" fontWeight={'600'}>
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    marginTop="30px"
                    fontFamily="inherit"
                    color="var(--primary)"
                    textAlign="justify"
                    margin="20px 10px 0 10px"
                    sx={{ minHeight: '170px', maxHeight: '180px' }}
                >
                    {description}
                </Typography>
            </CardContentWrapper>
        </CardWrapper>
    );
};

export const About = () => {
    return (
        <Container title={'About'} id="about" hasLightBackground darkTitleColor>
            <AboutWrapper>
                {about.map(abt => (
                    <AboutCard key={abt.title} {...{ ...abt }} />
                ))}
            </AboutWrapper>
        </Container>
    );
};
