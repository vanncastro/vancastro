import React from 'react';

import { InlineWidget } from 'react-calendly';
import styled from 'styled-components';

import { Container } from './Container';
import { Text } from './Text';
import { pageSettings } from 'src/utils/pageSettings';

const StyledDiv = styled.div`
    padding: 20px;
    text-align: center;
    margin: 10px 0 40px;
`;

export const Schedule = ({ selectedDriver }: { selectedDriver: string }) => {
    return (
        <Container
            title="Schedule"
            id="schedule"
            hasLightBackground
            height={pageSettings[selectedDriver].calendly ? '140vh' : '50vh'}
            darkTitleColor
        >
            <StyledDiv>
                <Text color={'var(--primary)'} type="header">
                    You are scheduling with <span style={{ color: 'var(--background)' }}>{selectedDriver}</span>
                </Text>
            </StyledDiv>

            {pageSettings[selectedDriver].calendly ? (
                <InlineWidget
                    pageSettings={{
                        backgroundColor: 'var(--background)',
                        primaryColor: 'var(--primary)',
                        textColor: 'var(--background)',
                    }}
                    styles={{ height: '100vh' }}
                    url={pageSettings[selectedDriver].calendly}
                />
            ) : (
                <StyledDiv>
                    <Text color={'var(--primary)'} type="body">
                        Schedule Currently Unavailable
                    </Text>
                </StyledDiv>
            )}
        </Container>
    );
};
