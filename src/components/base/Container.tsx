import React from 'react';

import styled from 'styled-components';
import { COLORS } from '../../utils/utils';

const StyledContainer = styled.section<{ hasLightBackground?: boolean; height?: string; paddingBottom?: string }>`
    height: ${({ height }) => height || '90vh'};
    background-color: ${props => (props.hasLightBackground ? '#fff' : 'transparent')};
    padding-bottom: ${({ paddingBottom }) => paddingBottom || '0'};

    @media (max-width: 1100px) {
        height: 100%;
    }
`;

const StyledTitle = styled.h3<{ darkTitleColor?: boolean }>`
    && {
        font-family: var(--font-family);
        font-weight: bold;
        font-size: 3rem;
        color: ${({ darkTitleColor }) => (darkTitleColor ? COLORS.primary : COLORS.background)};
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 3px;
        line-height: 1.5;
        position: relative;
        top: 30px;
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        width: 250px;
        height: 3px;
        background-color: ${({ darkTitleColor }) => (darkTitleColor ? COLORS.primary : COLORS.background)};
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
`;

export const Container = ({
    id,
    title,
    children,
    hasLightBackground = false,
    darkTitleColor,
    paddingBottom,
    height,
}: {
    id?: string;
    height?: string;
    title?: string;
    children: React.ReactNode;
    borderBottomSize?: string;
    hasLightBackground?: boolean;
    darkTitleColor?: boolean;
    paddingBottom?: string;
}) => {
    return (
        <StyledContainer height={height} hasLightBackground={hasLightBackground} paddingBottom={paddingBottom}>
            {title && (
                <StyledTitle id={id} darkTitleColor={darkTitleColor}>
                    {title}
                </StyledTitle>
            )}

            {children}
        </StyledContainer>
    );
};
