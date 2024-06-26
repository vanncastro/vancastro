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
    max-width: 700px;
    margin: 0 auto;

    gap: 40px;

    @media (max-width: 800px) {
        flex-direction: column;
        gap: 2px;
    }
`;

const Driver = ({ agent }) => {
    return (
        <CardWrapper sx={{ fontFamily: 'var(--font-family)' }}>
            <CardMediaWrapper image={agent.imageUrl} title={agent.name} />
            <CardContentWrapper>
                <Typography variant="h5" gutterBottom fontFamily="inherit">
                    {agent.name}
                </Typography>
                <Typography variant="body2" fontFamily="inherit">
                    {agent.about}
                </Typography>
            </CardContentWrapper>
            <ActionsWrapper>
                <Button
                    sx={{
                        fontFamily: 'var(--font-family)',
                        color: 'var(--primary)',
                        border: '1px solid var(--primary)',
                        height: '30px',
                        margin: '0 15px 20px',
                        ':hover': {
                            backgroundColor: 'var(--background)',
                        },
                    }}
                    size="large"
                    color="primary"
                    href={`/driver/${agent.name.toLowerCase()}#about`}
                >
                    About
                </Button>

                <Button
                    sx={{
                        fontFamily: 'var(--font-family)',
                        fontWeight: '600',
                        color: 'var(--primary)',
                        border: !Boolean(pageSettings[agent.name.toLowerCase()].calendly)
                            ? ''
                            : '1px solid var(--primary)',
                        height: '30px',
                        margin: '0 0 20px',
                        ':hover': {
                            backgroundColor: 'var(--background)',
                        },
                    }}
                    color="primary"
                    disabled={!Boolean(pageSettings[agent.name.toLowerCase()].calendly)}
                    size="large"
                    href={`/driver/${agent.name.toLowerCase()}#schedule`}
                >
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
