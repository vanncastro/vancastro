import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

export const ScrollTop = () => {
    const trigger = useScrollTrigger({
        target: typeof window === 'undefined' ? undefined : window,
        disableHysteresis: true,
        threshold: 500,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
            '#back-to-top-anchor'
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{
                    position: 'fixed',
                    bottom: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    zIndex: 99999,
                }}
            >
                <Fab
                    size="large"
                    aria-label="scroll back to top"
                    sx={{
                        backgroundColor: 'var(--primary)',
                        color: 'var(--white)',
                        ':hover': { color: 'var(--primary)' },
                    }}
                >
                    <KeyboardArrowUpIcon fontSize={'large'} />
                </Fab>
            </Box>
        </Fade>
    );
};
