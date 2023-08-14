import React from 'react';
import { Container } from './base/Container';
import styled from 'styled-components';
import { WhatsApp, Facebook, Instagram, YouTube } from '@mui/icons-material';
import { pageSettings } from 'src/utils/pageSettings';
import { SiGooglemaps } from 'react-icons/si';

const StyledSubTitle = styled.h2<{ margin?: string }>`
    margin-top: 60px;
    ${({ margin }) => (margin ? `margin: ${margin};` : '')}
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
        font-weight: 600;
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    & > *,
    svg {
        color: var(--primary);
        font-size: 5rem;
        cursor: pointer;
        transition: transform 0.2s;
        padding: 20px 15px;

        &:hover {
            transform: scale(1.2);
        }
    }

    @media (max-width: 768px) {
        & > *,
        svg {
            font-size: 3rem;
            padding: 10px 10px;
        }
    }
`;

const StyledContainer = styled.ul`
    flex-direction: column;
    color: var(--primary);
    margin-right: 50px;
`;

const StyledServiceTitle = styled.p`
    font-family: var(--font-family);
    font-size: 22px;
    color: var(--primary);
    font-weight: 600;
    padding: 0;
    text-align: center;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 17px;
    }
`;

const StyledLi = styled.li`
    font-family: var(--font-family);
    text-decoration: none;
    list-style-type: none;
    color: var(--primary);
    align-items: center;
    display: flex;
    padding: 5px;
    width: max-content;
    margin: 0 auto;

    svg {
        margin-right: 5px;
        font-size: 22px;
        color: var(--primary);
    }

    &:hover {
        font-weight: 600;
    }

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const Contact = () => {
    return (
        <Container paddingBottom="50px" title="Contact Us!" darkTitleColor height={'100%'} id="contact">
            <StyledSubTitle>Email Address</StyledSubTitle>
            <a target="_blank" href={`mailto: ${pageSettings.email_address}`} style={{ textDecoration: 'none' }}>
                <StyledText cursorPointer>{pageSettings.email_address}</StyledText>
            </a>
            <StyledSubTitle>Phone Number</StyledSubTitle>
            <a
                target="_blank"
                style={{ textDecoration: 'none' }}
                href={`//api.whatsapp.com/send?phone=${pageSettings.unformated_phone_number}&text=${pageSettings.whats_app_text}`}
            >
                <StyledText>{pageSettings.phone_number}</StyledText>
            </a>
            <StyledSubTitle margin={'0 0 -40px'}>Service Area</StyledSubTitle>

            {pageSettings.service_area.map((area, index) => {
                return (
                    <StyledContainer key={`${index}service`}>
                        <StyledServiceTitle>{area.title}</StyledServiceTitle>

                        {area.address.map(e => {
                            return (
                                <a
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                    key={e.label}
                                    target="_blank"
                                    href={e.google_maps_location}
                                >
                                    <StyledLi>
                                        <SiGooglemaps />
                                        {e.label}
                                    </StyledLi>
                                </a>
                            );
                        })}
                    </StyledContainer>
                );
            })}
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
                <a target="_blank" style={{ textDecoration: 'none' }} href={pageSettings.instagram_link}>
                    <Instagram />
                </a>

                <a target="_blank" style={{ textDecoration: 'none' }} href={pageSettings.youtube_link}>
                    <YouTube />
                </a>
            </SocialIcons>
        </Container>
    );
};
