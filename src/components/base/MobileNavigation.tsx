import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link as ReactScroll } from 'react-scroll';
import Button from '@mui/material/Button';
import Link from 'next/link';

import { Text } from './Text';
import { pageSettings } from 'src/utils/pageSettings';
import styled from 'styled-components';

const StyledLogo = styled.div<{ margin?: string }>`
    display: flex;
    align-items: center;
    flex-direction: column;
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
    margin: ${props => props.margin || '0'};
`;

const pageIteration = pg => {
    return pg.map(item => {
        if (item === 'Home') {
            return (
                <Link href="/" key={item} style={{ textDecoration: 'none' }}>
                    <Button
                        sx={{
                            color: 'var(--white)',
                            display: 'block',
                            margin: '10px auto',
                            fontFamily: 'var(--font-family)',
                        }}
                    >
                        {item}
                    </Button>
                </Link>
            );
        }

        return (
            <ReactScroll key={item} to={item.toLowerCase() === 'home' ? '/about' : item.toLowerCase()} spy smooth>
                <Button
                    sx={{
                        color: 'var(--white)',
                        display: 'block',
                        margin: '10px auto',
                        fontFamily: 'var(--font-family)',
                    }}
                >
                    {item}
                </Button>
            </ReactScroll>
        );
    });
};

export const MobileNavigation = ({ driverPage }: { driverPage: boolean }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(prevState => !prevState);
    };

    return (
        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            <AppBar component="nav" sx={{ backgroundColor: 'var(--primary) !important;' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { xs: 'flex', sm: 'flex', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {!mobileOpen && (
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <StyledLogo margin={'-20px 0 0'}>
                                <Text type="header" color="var(--white)">
                                    {pageSettings.logo}
                                </Text>
                                <Text type="small" color="var(--white)">
                                    Driving School
                                </Text>
                            </StyledLogo>
                        </Link>
                    )}

                    <div></div>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'flex', sm: 'flex', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: '250px',
                            backgroundColor: 'var(--primary) !important;',
                        },
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <StyledLogo>
                                <Text type="header" color="var(--white)">
                                    {pageSettings.logo}
                                </Text>
                                <Text type="small" color="var(--white)">
                                    Driving School
                                </Text>
                            </StyledLogo>
                        </Link>
                        <Divider sx={{ backgroundColor: 'var(--white)', marginTop: '20px' }} />
                        <List>
                            {!driverPage ? pageIteration(pageSettings.navMenu) : pageIteration(pageSettings.driverNav)}
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </Box>
    );
};
