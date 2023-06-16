import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll';

export const Landing = () => {
    return (
        <StyledWrapper>
            <StyledImage src="/landing.jpg" alt="Landing page image" />
            <Link to="schedule" spy smooth>
                <StyledButton>Schedule</StyledButton>
            </Link>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1500px;
`;

const StyledImage = styled.img`
    margin: 0 auto;
    width: 100%;
    border-radius: 15px;
    object-fit: cover;
    margin-top: 3em;

    @media (max-width: 768px) {
        height: 700px;
        object-fit: cover;
        margin-top: 5em;
    }
`;

const StyledButton = styled.button`
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: 230px;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-family: var(--font-family);
    padding: 1rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: var(--background);
    color: var(--primary);
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background-color: var(--primary);
        color: #fff;
        transition: all 0.3s ease-in-out;
    }
`;
