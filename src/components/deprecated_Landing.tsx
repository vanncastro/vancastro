import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';
import Button from '@mui/material/Button';

import { Container } from './base/Container';
import { Awards } from './base/Awards';
import { pageSettings } from '../utils/pageSettings';
import { COLORS } from '../utils/utils';

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    max-width: 70%;
    margin: 10em auto;

    @media (max-width: 600px) {
        margin-top: 5em;
        display: block;
    }
`;

const StyledText = styled.p`
    font-size: 2rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;

    @media (max-width: 600px) {
        font-size: 1.8rem;
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }
`;

const StyledSubText = styled.p`
    font-size: 1.1rem;
    margin-top: -10px;
    font-weight: 200;
    color: gray;

    @media (max-width: 600px) {
        font-size: 1rem;
        text-align: center;
        width: 80%;
        margin: 10px auto 0;
    }
`;

const ParagraphContainer = styled.div`
    display: block;
`;

const Tag = styled.span`
    color: ${COLORS.primary};
`;

const StyledButtons = styled(Button)<{ marginLeft?: boolean }>`
    margin-top: 40px;
`;

const StyledDiv = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 600px) {
        justify-content: center;
        margin-bottom: 20px;
    }
`;

const StyledImage = styled(Image)`
    @media (max-width: 600px) {
        width: 95%;
        display: flex;
        margin: 0 auto;
    }
`;

const StyledAwards = styled.div`
    display: block;

    @media (max-width: 600px) {
        text-align: center;
    }
`;

const StyledAwardsContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`;

export const Landing = ({ handleSelectedPerson }: { handleSelectedPerson: (p: string) => void }) => {
    return (
        <Container>
            <StyledContainer>
                <ParagraphContainer>
                    <StyledText>
                        Welcome to <Tag>{pageSettings.client_name}</Tag> driving school
                    </StyledText>
                    <StyledSubText>
                        Learn to drive with the best driving school in <Tag>{pageSettings.client_location}</Tag>
                    </StyledSubText>
                    <StyledAwards>
                        <p>Awards</p>
                        <StyledAwardsContainer>
                            <Awards />
                        </StyledAwardsContainer>
                    </StyledAwards>
                    <StyledDiv>
                        <StyledButtons variant="contained" size="large" onClick={null}>
                            Large
                        </StyledButtons>
                        <StyledButtons variant="contained" size="large" onClick={null}>
                            Learn more
                        </StyledButtons>
                    </StyledDiv>
                </ParagraphContainer>
                <StyledImage src="/bg.png" alt="Landing" height={400} width={400} />
            </StyledContainer>
        </Container>
    );
};
