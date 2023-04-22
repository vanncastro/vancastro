import React from 'react';
import { Container } from './base/Container';
import styled from 'styled-components';
import { WhatsApp, Facebook } from '@mui/icons-material';
import { pageSettings } from 'src/utils/pageSettings';

const StyledTitle = styled.h1`
    text-align: center;
    padding: 50px;
    font-size: 50px;
    font-family: var(--font-family);
    letter-spacing: 4px;
    color: var(--primary);

    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

const StyledSubTitle = styled.h2`
    text-align: center;
    padding: 40px;
    font-size: 40px;
    font-family: var(--font-family);
    letter-spacing: 4px;
    font-weight: 700;
    color: var(--primary);

    @media (max-width: 768px) {
        font-size: 20px;
        letter-spacing: 2px;
    }
`;

const StyledText = styled.p<{ cursorPointer?: boolean }>`
    text-align: center;
    font-size: 22px;
    font-family: var(--font-family);
    margin-top: -50px;
    color: var(--primary);

    :hover {
        ${({ cursorPointer }) => cursorPointer && 'cursor: pointer;'}
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > *,
    svg {
        color: var(--primary);
        font-size: 5rem;
        cursor: pointer;
        transition: transform 0.2s;
        padding: 50px 15px;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const Contact = () => {
    return (
        <Container paddingBottom="50px">
            <StyledTitle id="contact">Contact us!</StyledTitle>

            <StyledSubTitle>Email Address</StyledSubTitle>
            <a target="_blank" href={`mailto: ${pageSettings.email_address}`} style={{ textDecoration: 'none' }}>
                <StyledText cursorPointer>{pageSettings.email_address}</StyledText>
            </a>

            <StyledSubTitle>Phone Number</StyledSubTitle>
            <StyledText>{pageSettings.phone_number}</StyledText>

            <SocialIcons>
                <a
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                    href={`//api.whatsapp.com/send?phone=${pageSettings.unformated_phone_number}&text=${pageSettings.whats_app_text}`}
                >
                    <WhatsApp />
                </a>
                <a target="_blank" style={{ textDecoration: 'none' }} href={pageSettings.facebook_link}>
                    <Facebook />
                </a>
            </SocialIcons>
        </Container>
    );
};
