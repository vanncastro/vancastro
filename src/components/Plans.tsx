import React from 'react';
import styled from 'styled-components';
import { Container } from './base/Container';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { FaCarSide, FaPlayCircle } from 'react-icons/fa';
import {
    TbSquareRoundedNumber1Filled,
    TbSquareRoundedNumber2Filled,
    TbSquareRoundedNumber3Filled,
} from 'react-icons/tb';

export const Plans = () => {
    const pricePlans = [
        {
            id: 1,
            title: 'Road Lesson',
            description: '1h.',
            old_price: null,
            price: '75.00',
            icon: <TbSquareRoundedNumber1Filled fontSize="inherit" />,
        },
        {
            id: 2,
            title: 'Road Lesson',
            description: '90 min.',
            price: '110.00',
            old_price: null,
            icon: <TbSquareRoundedNumber2Filled fontSize="inherit" />,
        },

        {
            id: 3,
            title: 'Road Lesson',
            description: '2h',
            price: '150.00',
            old_price: null,
            icon: <FaPlayCircle fontSize="inherit" />,
        },

        {
            id: 4,
            title: 'Road Test',
            description: 'includes car for the Road Test + 1 hour warm up',
            price: '150.00',
            old_price: null,
            icon: <FaCarSide fontSize="inherit" />,
        },
    ];

    return (
        <Container title="plans" id="plans" darkTitleColor height={'100%'}>
            <StyledDiv>
                <Image src="/plans2.jpeg" alt="plans" width={800} height={40} />
                <Image src="/plans1.jpeg" alt="plans" width={800} height={40} />
                {/* {pricePlans.map(plan => (
                    <StyledPriceCard key={plan.id}>
                        <StyledIcon>{plan.icon}</StyledIcon>

                        <StyledPriceTitle>{plan.title}</StyledPriceTitle>
                        <StyledPriceDescription>{plan.description}</StyledPriceDescription>
                        <StyledOldPrice>{plan.old_price}</StyledOldPrice>
                        <StyledPrice>{`$${plan.price}`}</StyledPrice>

                        <Link to={'contact'} spy smooth>
                            <StyledButton>Inquire</StyledButton>
                        </Link>
                    </StyledPriceCard>
                ))} */}
            </StyledDiv>
        </Container>
    );
};

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    max-width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;

    img {
        background-size: cover;
        image-rendering: -moz-crisp-edges;
        image-rendering: -o-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor;
        object-fit: cover;
        height: auto;
        width: auto;
        margin-left: 15px;
    }

    @media (max-width: 800px) {
        margin: 150px auto;
        flex-direction: column;

        img {
            width: 100%;
            margin-top: 20px;
        }
    }
`;

const StyledPriceCard = styled.div`
    position: relative;
    text-align: center;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 2rem;
    transition: box-shadow 0.3s ease-in-out;
    background-color: #fff;
    min-width: 300px;
    max-width: 301px;
    height: 450px;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        min-width: 259px;
        max-width: 260px;
        margin: 0 auto 20px;
    }
`;

const StyledIcon = styled.span`
    font-size: 90px;
    color: var(--primary);
`;

const StyledPriceTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background-color: var(--primary);
    color: var(--white);
    padding: 4px;
    width: 100%;
    border-radius: 5px;
    letter-spacing: 3px;
    font-family: var(--font-family);
`;

const StyledPriceDescription = styled.p<{ height?: string }>`
    font-size: 1rem;
    margin-bottom: 2rem;
    font-family: var(--font-family);
    text-align: center;
    width: 95%;
    min-height: 50px;
    margin-top: 20px;
`;

const StyledPrice = styled.p<{ marginTop?: string }>`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;

    font-family: var(--font-family);
`;

const StyledButton = styled.button`
    width: auto;
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

const StyledOldPrice = styled(StyledPrice)`
    text-decoration: line-through;
    color: var(--danger);
    font-size: 1.3rem;
    margin-bottom: -20px;
    height: 30px;
    font-family: var(--font-family);
`;
