import React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import { pageSettings } from '../utils/pageSettings';
import { Text } from './base/Text';
import { useRouter } from 'next/router';

const FooterWrapper = styled.footer`
    display: flex;
    background-color: var(--primary);
`;

const StyledText = styled(Text)`
    padding: 2px;
    text-transform: none;
    margin-top: 15px;
    color: var(--white);

    a {
        text-decoration: none;
        color: var(--white);
    }
`;

export const Footer = () => {
    const router = useRouter();
    const date = new Date();
    const year = date.getFullYear();

    return (
        <FooterWrapper>
            <Container maxWidth="lg">
                <StyledText textAlign="center" type="small">
                    © {year} {pageSettings.client_name}. All rights reserved.
                </StyledText>

                <StyledText height={1} type="small" color="#fff" textAlign="center">
                    {/* Developed by:{' '}
                    <a style={{ textDecoration: 'none' }} target="_blank" href={'https://www.github.com/ghbarreto'}>
                        {' '}
                        Gabriel Barreto
                    </a>{' '}
                    &<a style={{ textDecoration: 'none' }}> Thaís Carmo</a>{' '} */}
                </StyledText>
            </Container>
        </FooterWrapper>
    );
};
