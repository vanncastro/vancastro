import React from 'react';
import styled from 'styled-components';
import { School, ThumbUp, Build } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Container } from '../components/base/Container';
import { pageSettings } from 'src/utils/pageSettings';

const about = [
    {
        title: pageSettings.about.card1.title,
        icon: <School fontSize="inherit" />,
        description: pageSettings.about.card1.description,
    },
    {
        title: pageSettings.about.card1.title,
        icon: <ThumbUp fontSize="inherit" />,
        description: pageSettings.about.card1.description,
    },
    {
        title: pageSettings.about.card1.title,
        icon: <Build fontSize="inherit" />,
        description: pageSettings.about.card1.description,
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
        <CardWrapper>
            <CardContentWrapper>
                <IconWrapper>{icon}</IconWrapper>
                <Typography variant="h4" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body1" marginTop="30px">
                    {description}
                </Typography>
            </CardContentWrapper>
        </CardWrapper>
    );
};

export const About = () => {
    return (
        <Container title={'About'} id="about" hasLightBackground>
            <AboutWrapper>
                {about.map(abt => (
                    <AboutCard key={abt.title} {...{ ...abt }} />
                ))}
            </AboutWrapper>
        </Container>
    );
};
