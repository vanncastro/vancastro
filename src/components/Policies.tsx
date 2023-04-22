import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

import { Container } from './base/Container';
import { pageSettings } from 'src/utils/pageSettings';

export const Policies = () => {
    return (
        <Container darkTitleColor hasLightBackground title="Our Policies" height={'100%'} paddingBottom="200px">
            <StyledContainer>
                {pageSettings.policies.map((policy, index) => {
                    return (
                        <Accordion
                            disableGutters
                            key={index}
                            TransitionProps={{ unmountOnExit: true }}
                            sx={{ backgroundColor: '#ededed', ':hover': { backgroundColor: 'var(--white)' } }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}a-content`}
                                id={`panel${index}a-header`}
                            >
                                <StyledTitle>{policy.title}</StyledTitle>
                            </AccordionSummary>
                            <AccordionDetails>
                                <StyledText>
                                    {policy.bulletpoints.map(e => {
                                        return <li key={e}>{e}</li>;
                                    })}
                                </StyledText>

                                {policy.note && <StyledNote>Note: {policy.note}</StyledNote>}
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </StyledContainer>
        </Container>
    );
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60%;
    margin: 100px auto;

    .Mui-expanded {
        background-color: var(--white);
    }

    @media (max-width: 768px) {
        max-width: 90%;
    }
`;

const StyledText = styled.ul`
    font-family: var(--font-family);
    line-height: 30px;
    color: var(--primary);
`;

const StyledTitle = styled.p`
    font-family: var(--font-family);
    line-height: 30px;
    font-weight: bold;
    color: var(--primary);
`;

const StyledNote = styled.p`
    margin-left: 30px;
    font-family: var(--font-family);
    font-weight: 400;
    line-height: 30px;
    font-style: italic;
    color: var(--background);
    font-size: 13px;
    font-weight: 800;
`;
