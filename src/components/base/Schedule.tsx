import React from 'react';

import { InlineWidget } from 'react-calendly';
import styled from 'styled-components';

import { Container } from './Container';
import { Text } from './Text';
import { COLORS } from 'src/utils/utils';

const StyledDiv = styled.div`
    padding: 20px;
    text-align: center;
    margin: 10px 0 40px;
`;

export const Schedule = ({ selectedDriver }: { selectedDriver: string }) => {
    return (
        <Container title="Schedule" id="schedule" hasLightBackground height={'140vh'}>
            <StyledDiv>
                <Text color={COLORS.primary} type="header">
                    You are scheduling with {selectedDriver}
                </Text>
            </StyledDiv>

            <InlineWidget
                pageSettings={{
                    backgroundColor: COLORS.background,
                    primaryColor: COLORS.primary,
                    textColor: COLORS.background,
                }}
                styles={{ height: '100vh' }}
                url="https://calendly.com/accastro1307/30min"
            />
        </Container>
    );
};
