import React from 'react';

import styled from 'styled-components';
import Image from 'next/image';

import { Container } from './Container';
import { pageSettings } from 'src/utils/pageSettings';

const StyledContainer = styled.section`
    display: flex;
    gap: 2px;
    justify-content: center;
    width: 80%;
    max-width: 1200px;
    margin: 10em auto;
    align-items: start;
    padding: 2rem;

    @media (max-width: 830px) {
        display: block;
        margin: 0 auto;
    }
`;

const StyledContentContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 20px;
`;

const StyledImageContainer = styled.div`
    @media (max-width: 830px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const StyledImage = styled(Image)`
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    height: 100%;
    object-fit: contain;
`;

const StyledTextContainer = styled.div`
    width: 100%;
    align-items: center;
    line-height: 33px;
    letter-spacing: 1.3px;
    height: 100%;
`;

const StyledTitle = styled.h3`
    color: var(--primary);
    font-size: 2.5rem;
    font-family: var(--font-family);
    width: 100%;
    margin-top: -30px;
    margin-left: 80px;
    font-weight: bold;

    @media (max-width: 830px) {
        font-size: 1.6rem;
        margin-top: 30px;
        margin-left: 0px;
        text-align: center;
    }
`;

const StyledParagraph = styled.p`
    color: var(--primary);
    font-size: 1.7rem;
    font-family: var(--font-family);
    width: 100%;
    line-height: 50px;
    letter-spacing: 2px;
    margin-top: 20px;
    margin-left: 80px;
    font-weight: lighter;

    text-align: left;

    @media (max-width: 830px) {
        font-size: 1.2rem;
        line-height: 40px;
        letter-spacing: 1.3px;
        margin-top: 0;
        margin-left: 0px;
    }
`;

export const DriverAbout = ({ selectedDriver }: { selectedDriver: string }) => {
    return (
        <Container id="about" title={`About`} darkTitleColor height={'100%'}>
            <StyledContainer>
                <StyledImageContainer>
                    <StyledImage
                        src={pageSettings[selectedDriver].logo}
                        alt="Profile Picture"
                        width={300}
                        height={300}
                    />
                </StyledImageContainer>
                <StyledContentContainer>
                    <StyledTextContainer>
                        <StyledTitle color={'var(--primary)'}>
                            Hello, I am {pageSettings[selectedDriver].display_name}!
                        </StyledTitle>
                        <StyledParagraph color={'var(--primary)'}>{pageSettings[selectedDriver].about}</StyledParagraph>
                    </StyledTextContainer>
                </StyledContentContainer>
            </StyledContainer>
        </Container>
    );
};
