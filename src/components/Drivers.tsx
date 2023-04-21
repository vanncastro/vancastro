import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import { Container } from '../components/base/Container';
import { pageSettings } from '../utils/pageSettings';

const CardWrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    margin-bottom: 40px;

    align-items: center;

    @media (max-width: 800px) {
        margin-top: 20px;

        :not(:first-child) {
            margin-left: 0px;
        }
    }
`;

const CardMediaWrapper = styled(CardMedia)`
    height: 420px;
    width: 90%;
    margin-top: 10px;
    border-radius: 10px;
`;

const CardContentWrapper = styled(CardContent)`
    text-align: center;
`;

const ActionsWrapper = styled(CardActions)`
    display: flex;
    justify-content: space-between;
`;

const DriverWrapper = styled(CardActions)`
    display: flex;
    justify-content: center;
    max-width: 350px;
    margin: 0 auto;

    gap: 20px;

    @media (max-width: 800px) {
        display: block;
        margin: 0 auto;
        justify-content: center;
        max-width: 70%;
    }
`;

const Driver = ({ agent }) => {
    return (
        <CardWrapper>
            <CardMediaWrapper image={agent.imageUrl} title={agent.name} />
            <CardContentWrapper>
                <Typography variant="h5" gutterBottom>
                    {agent.name}
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor turpis quis erat
                    malesuada, sit amet cursus nunc luctus. Nulla facilisi.
                </Typography>
            </CardContentWrapper>
            <ActionsWrapper>
                <Button size="medium" color="primary" href={`/driver/${agent.name.toLowerCase()}#about`}>
                    Learn More
                </Button>

                <Button size="medium" color="primary" href={`/driver/${agent.name.toLowerCase()}#schedule`}>
                    Schedule
                </Button>
            </ActionsWrapper>
        </CardWrapper>
    );
};

export const Drivers = () => {
    return (
        <Container title="Schedule" hasLightBackground darkTitleColor id="schedule" height={'100%'}>
            <DriverWrapper>
                {pageSettings.drivers.map(agent => (
                    <Driver key={agent.id} agent={agent} />
                ))}
            </DriverWrapper>
        </Container>
    );
};
