import * as React from 'react';

import styled from 'styled-components';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link as ReactScroll } from 'react-scroll';
import Link from 'next/link';

import dynamic from 'next/dynamic';
import { MobileNavigation } from './base/MobileNavigation';
import { pageSettings } from '../utils/pageSettings';
import { Text } from './base/Text';

const Appbar = dynamic(() => import('@mui/material/AppBar'), {
    ssr: false,
});

const StyledAppBar = styled(Appbar)`
    border-radius: 15px;
    max-width: 1500px;
    margin: 0 auto;
    align-items: center;
    background-color: var(--primary) !important;

    @media (max-width: 600px) {
        max-width: 100%;
    }
`;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: -40px;
    letter-spacing: 0.3rem;

    @media (max-width: 600px) {
        margin-top: -20px;
        margin-right: -8px;
        letter-spacing: 0.1rem;
    }
`;

const pageIteration = page => {
    return page.map(pg => {
        if (pg === 'Home') {
            return (
                <Link href="/" key={pg} style={{ textDecoration: 'none' }}>
                    <Button
                        sx={{
                            color: 'var(--white)',
                            display: 'block',
                            ml: { lg: '50px', md: '20px' },
                            fontFamily: 'var(--font-family)',
                        }}
                    >
                        {pg}
                    </Button>
                </Link>
            );
        } else {
            return (
                <ReactScroll key={pg} to={pg.toLowerCase()} spy smooth>
                    <Button
                        sx={{
                            color: 'var(--white)',
                            display: 'block',
                            ml: { lg: '50px', md: '20px' },
                            fontFamily: 'var(--font-family)',
                        }}
                    >
                        {pg}
                    </Button>
                </ReactScroll>
            );
        }
    });
};

export const Header = ({ driverPage }: { driverPage: boolean }) => {
    return (
        <StyledAppBar position="static">
            <MobileNavigation driverPage={driverPage} />
            <Container maxWidth="xl" sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                <Toolbar disableGutters>
                    <Typography
                        component="a"
                        href="/"
                        sx={{
                            mr: { xs: 2, lg: 5 },
                            ml: { xs: 1, lg: 3 },
                            textDecoration: 'none',
                        }}
                    >
                        <StyledLogo>
                            <Text type="header" color="var(--white)">
                                {pageSettings.logo}
                            </Text>
                            <Text type="small" color="var(--white)">
                                Driving School
                            </Text>
                        </StyledLogo>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around', overflow: 'scroll' }}>
                        {!driverPage ? pageIteration(pageSettings.navMenu) : pageIteration(pageSettings.driverNav)}
                    </Box>
                </Toolbar>
            </Container>
        </StyledAppBar>
    );
};
