import React from 'react';

import styled from 'styled-components';
import Image from 'next/image';

import { Container } from './Container';
import { Text } from './Text';
import { COLORS } from 'src/utils/utils';
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

    @media (max-width: 768px) {
        display: block;
        width: 100%;
        margin: 0 auto;
    }
`;

const StyledContentContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 20px;

    @media (max-width: 768px) {
    }
`;
const StyledImageContainer = styled.div`
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-left: -2em;
    }
`;

const StyledImage = styled(Image)`
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    height: 100%;
    object-fit: contain;
`;

const StyledTextContainer = styled.div`
    width: 80%;
    align-items: center;
    margin-left: 2rem;
    line-height: 33px;
    letter-spacing: 1.3px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-left: -3rem;
        margin-bottom: 200px;
        display: block;
    }
`;

export const DriverAbout = ({ selectedDriver }: { selectedDriver: string }) => {
    console.log(pageSettings[selectedDriver].display);
    return (
        <Container id="about" title={`About`} darkTitleColor>
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
                        <Text color={COLORS.primary} type="header" textAlign="center">
                            Hi, Im {pageSettings[selectedDriver].display_name}!
                        </Text>
                        <Text color={COLORS.primary} type="body" margin={'60px 30px 20px 50px'}>
                            I have over 10 years of experience in web development and have worked with a wide range of
                            clients across different industries. I have a passion for creating beautiful and functional
                            websites that exceed my clients expectations.
                        </Text>
                    </StyledTextContainer>
                </StyledContentContainer>
            </StyledContainer>
        </Container>
    );
};
