import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { WhatsApp, Facebook, Instagram } from '@mui/icons-material';
import { COLORS } from 'src/utils/utils';
import { pageSettings } from '../utils/pageSettings';
import { Text } from './base/Text';
import { useRouter } from 'next/router';

const FooterWrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${COLORS.primary};
    color: #fff;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
        transition: transform 0.2s;
        padding: 5px 15px;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

const StyledText = styled(Text)`
    padding: 5px;
    text-transform: none;
    color: #fff;
`;

export const Footer = () => {
    const router = useRouter();
    const date = new Date();
    const year = date.getFullYear();

    return (
        <FooterWrapper>
            <Container maxWidth="lg">
                <Typography variant="body2" display={'flex'} justifyContent={'center'} padding={'5px'}>
                    © {year} {pageSettings.client_name}. All rights reserved.
                </Typography>
                <SocialIcons>
                    <WhatsApp />
                    <Facebook />
                    <Instagram />
                </SocialIcons>

                <span onClick={() => router.push('https://www.github.com/ghbarreto')}>
                    <StyledText height={1} type="small" color="#fff" textAlign="center">
                        Developed by: ghbarreto
                    </StyledText>
                </span>
            </Container>
        </FooterWrapper>
    );
};
