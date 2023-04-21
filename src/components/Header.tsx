import * as React from 'react';

import styled from 'styled-components';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import dynamic from 'next/dynamic';
// import { Avatar } from './ProfilePage';
import { fontFamily } from '../utils/utils';
import { pageSettings } from '../utils/pageSettings';
import { Text } from './base/Text';

const Appbar = dynamic(() => import('@mui/material/AppBar'), {
    ssr: false,
});

const StyledAppBar = styled(Appbar)`
    border-radius: 15px;
    max-width: 1700px;
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

export const Header = ({
    selectedPerson,
    isSelectingDriver,
}: {
    selectedPerson: string;
    isSelectingDriver?: boolean;
}) => {
    const hasSelectedDriver = selectedPerson !== '';

    return (
        <StyledAppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        component="a"
                        href="/"
                        sx={{
                            mr: { xs: hasSelectedDriver ? 1 : 2, lg: 5 },
                            ml: { xs: hasSelectedDriver ? 0 : 1, lg: 3 },
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
                        {pageSettings.navMenu.map(page =>
                            !hasSelectedDriver ? (
                                <Link key={page} to={page.toLowerCase()} spy smooth>
                                    <Button sx={{ my: 3, color: 'var(--white)', display: 'block', fontFamily }}>
                                        {page}
                                    </Button>
                                </Link>
                            ) : (
                                <Button
                                    key={page}
                                    href={`/#${page.toLowerCase()}`}
                                    sx={{ my: 3, color: 'var(--white)', display: 'block', fontFamily }}
                                >
                                    {page}
                                </Button>
                            )
                        )}
                    </Box>

                    {/* {hasSelectedDriver && <Avatar selectedPerson={selectedPerson} />} */}
                </Toolbar>
            </Container>
        </StyledAppBar>
    );
};
